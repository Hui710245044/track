// 速卖通线上发货


/**
 *  url: https://slw16.global.cainiao.com/trackRefreshRpc/refresh.json?mailNo=RB367740510SG&_=1517989097972
 */
let axios = require('axios');
import cheerio from 'cheerio';

async function request_track_result(track) {
    try {
        let res = await axios.get(`https://slw16.global.cainiao.com/detail.htm?mailNoList=${track}&_=${new Date().getTime()}`);
        let $ = cheerio.load(res.data);
        let {data} = JSON.parse($('#waybill_list_val_box').text());
        console.log(JSON.stringify(data[0]));
        return data[0];
    } catch (err) {
        throw err;
    }

}

export default request_track_result