let axios = require('axios');
import logger from '../../log4js';
import UserAgents from '../../helper/user-agents';


async function request_track_result(trackList) {
    let options = {
        url: 'https://t.17track.net/restapi/track',
        method: 'POST',
        headers: {
            'Host': 't.17track.net',
            'Connection': 'close',
            'Pragma': 'no-cache',
            'Cache-Control': 'no-cache',
            'Accept': 'application/json',
            'Origin': 'https://t.17track.net',
            'X-Requested-With': 'XMLHttpRequest',
            'User-Agent': UserAgents.randomOne(),
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'Referer': 'https://t.17track.net/zh-cn',
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'zh-CN,zh;q=0.9 '
        },
        data: {
            "guid": "", "data": trackList.unique().map(track => {
                return {num: track};
            })
        }
    };
    return new Promise((succ, fail) =>{
        axios(options).then(function (res) {
            if(res.data.msg === 'Ok'){
                succ(res.data.dat);
            }else{
                fail(res);
            }
        }).catch(error => {
            fail(error);
        });
    })
}

export default request_track_result