// 速卖通线上发货

import request from '../request';
import cheerio from 'cheerio';
import {set_log} from '../model/track_log';

async function request_track_result(channel, trackList) {
    if(trackList instanceof Array){
        trackList = trackList.join(',');
    }
    try {
        let res = await request.query(`https://slw16.global.cainiao.com/detail.htm?mailNoList=${trackList}&_=${new Date().getTime()}`);
        let $ = cheerio.load(res.data);
        let {data} = JSON.parse($('#waybill_list_val_box').text());
        data =await Promise.all(data.map( async track => {
            let ret = {};
            ret.track = track.mailNo;
            ret.is_online = channel.node <= track.section2.detailList.length;
            if(ret.is_online){
                let last = track.section2.detailList[0];
                ret.is_succ = last.desc.indexOf(channel.delivered) >= 0;
            }
            await set_log(ret.track, track.section2.detailList);
            return ret;
        }));
        return data;
    } catch (err) {
        throw err;
    }

}

export default request_track_result