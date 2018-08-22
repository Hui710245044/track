let c = require('child_process');
import logger from '../log4js';

import trackmore from './carrier/trackingmore';
import aliexpress from './carrier/aliexpress';
import track_17 from './carrier/17track';
import ahpostwish from './carrier/ahpostwish';
import shunyou from './carrier/shunyou';
import yuntrack from './carrier/yuntrack';
import channelJson from '../channel';
import TrackNumber from '../model/track_number';


import {pop_list_promise, get_list_len, push_list_promise} from './redis'
import {push_tracks_queue} from '../redis/track_queue'
import {update, findOne} from '../mongodb/tracking-list'


function setTime(ms) {
    return new Promise((succ, err) => {
        setTimeout(succ, ms);
    })
}

async function process_track_number(track,channel){
    if (channel === 'cn') {
        return await aliexpress(track);
    } else {
        return await track_17([track]);
    }
}


async function get_info(query) {
    let where = {};
    if(query.excelId !== undefined){
        where.from_tag = query.excelId;
    }
    where.is_succ = 0;
    const tracks = await TrackNumber.findAll({
        where
    });
    const trackIds = tracks.map(track => track.track);
    await push_tracks_queue(trackIds, query.excelId);
    // 未妥投的跟踪号是否是第一次出现
    let isFirst = true;
    let isSecond = false;
    let firstTrack = '';

    let track = null;
    while (track = await pop_list_promise()) {
        let findOneResult = await findOne({tracking: track});

        // 找到对应查询平台信息
        let find_channel = channelJson.find(item => {
            return item.channel === findOneResult.identify
        });

        if (!find_channel) {
            console.error(`${track} ${findOneResult.identify} channel not defined in channels`);
        }

        console.log(findOneResult, find_channel);
        if (findOneResult.startTime < (new Date().getTime()) && findOneResult.endTime > (new Date().getTime())) { // 时间范围内
            try {
                await setTime(1000);
                console.log('get_track_info');

                // 2. 获取追踪信息
                let result = await process_track_number(findOneResult.tracking, find_channel.platform);
                if (result.msg === 'suc') {
                    let is_suc = result.is_suc;
                    let is_online = result.is_online_length >= find_channel.node;
                    // 2.1 成功的话更新到MongoDB数据库
                    update({tracking: track, info: result, isSuc: is_suc, isOnline: is_online});
                    if (!result.is_suc) { // 未投妥，压回队列，等待下次
                        await push_list_promise(track);
                        console.log('未投妥，压回队列');

                        if (firstTrack === track) {
                            isSecond = true;
                        }
                        if (isFirst) {
                            firstTrack = track;
                            isFirst = false;
                        }

                    }
                } else {// 出现了错误
                    console.log('请求频繁，压回队列');

                    // 压回队列
                    await push_list_promise(track);
                    //更换IP查询
                    c.exec('rasdial  /disconnect');
                    await setTime(5000);
                    c.exec('rasdial vpn tb108 1111');
                    await setTime(5000);

                }
            } catch (err) {
                console.log(`程序出现错误:${err.message}`)
            }


        } else { // 不在时间范围内，压回队列，等待下次
            if (findOneResult.endTime < (new Date().getTime())) {// 超时
                console.log('结束时间已到')
            } else {

                console.log('未到查询时间，压回队列');
                // 增加时间
                let newTime = findOneResult.startTime + 12 * 60 * 60 * 1000;
                if (newTime < findOneResult.endTime) {
                    update({tracking: track, startTime: newTime});
                }

                await push_list_promise(track);
            }
        }

        // 5. 重新计算队列长度
        list_len = await get_list_len();
        if (isSecond) {
            list_len = 0;
            isSecond = false;
        }
    }
    let list_len2 = await get_list_len();
    console.log(`remain queue length ${list_len2}`)

}

async function process_current_track_queues(){
    pop_list_promise()
}

export {
    get_info
}






