import track_17 from './carrier/17track';
import logger from '../log4js';
import {pop_list_erp_promise, get_list_erp_len, push_list_erp_promise} from './redis'



function setTime(ms) {
    return new Promise((succ, err) => {
        setTimeout(succ, ms);
    })
}
async function get_erp_post_info() {
    // 队列长度
    let list_len = await get_list_erp_len();
    let isFirst = true;
    let isSecond = false;
    let firstTrack = '';
    while (list_len > 0) {
        // 1. 从队列中取出一个 track
        let track = await pop_list_erp_promise();
        track = JSON.parse(track);
        console.log("test", track);
        // 找到对应查询平台信息

        if (track.startTime < (new Date().getTime())/1000 && track.deliveredEndTime > (new Date().getTime())/1000) { // 时间范围内


            try{
                await setTime(1000);
                console.log('get_track_info');

                // 2. 获取追踪信息
                let result = await track_17([track.tracking]); // todo 暂无erp中跟踪号查询渠道，全部从17平台查询

                console.log('result',result);

                if(result.msg === 'suc'){
                    let is_suc = result.is_suc;
                    let is_online = result.is_online_length >= 1;// todo 暂无erp中跟踪号节点数，暂时写1
                    // 2.1 成功的话更新到MongoDB数据库

                    // 回推
                    if(is_online){
                        console.log('已上线')
                        let res = await erp_push_back({
                            type: 1,
                            tracking: track.tracking,
                            time: new Date().getTime()/1000
                        });
                    }
                    if (is_suc) { // 投妥
                        let res = await erp_push_back({
                            type: 2,
                            tracking: track.tracking,
                            time: new Date().getTime()/1000
                        });
                    } else { // 未投妥，压回队列，等待下次
                        await push_list_erp_promise(track);
                        console.log('未投妥，压回队列');

                        if(firstTrack === track.tracking){
                            isSecond = true;
                        }
                        if(isFirst){
                            firstTrack = track.tracking;
                            isFirst = false;
                        }

                    }
                }else {// 出现了错误
                    console.log('请求频繁，压回队列');

                    // 压回队列
                    await push_list_erp_promise(track);
                    //更换IP查询
                    c.exec('rasdial  /disconnect');
                    await setTime(5000);
                    c.exec('rasdial vpn tb108 1111');
                    await setTime(5000);

                }
            }catch (err){
                console.log("程序出现错误", err)
            }

        } else { // 不在时间范围内，压回队列，等待下次
            if (track.deliveredEndTime < (new Date().getTime())/1000) {// 超时
                console.log('结束时间已到')
            } else {
                console.log('未到查询时间，压回队列');

                await push_list_erp_promise(track);

                if(firstTrack === track.tracking){
                    isSecond = true;
                }
                if(isFirst){
                    firstTrack = track.tracking;
                    isFirst = false;
                }
            }
        }

        // 5. 重新计算队列长度
        list_len = await get_list_erp_len();
        if(isSecond){
            list_len = 0;
            isSecond = false;
        }
    }


}

export {
    get_erp_post_info
}