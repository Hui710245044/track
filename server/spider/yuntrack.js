// 云途 返回html
let axios = require('axios');

function request_track_result(trackList) {
    return {
        url: 'http://www.yuntrack.com/Track/PartialDetail',
        method: 'POST',
        headers: {
            'Host': 'www.yuntrack.com',
            'Content-Length':27,
            'Connection': 'close',
            'Pragma': 'no-cache',
            'Cache-Control': 'no-cache',
            'Accept': '*/*',
            'Origin': 'http://www.yuntrack.com',
            'X-Requested-With': 'XMLHttpRequest',
            'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.108 Safari/537.36',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Referer': 'http://www.yuntrack.com/track/detail?id'+trackList,
            'Accept-Encoding': 'gzip, deflate',
            'Accept-Language': 'zh-CN,zh;q=0.9 '
        },
        data:'numbers[]='+ trackList
    };

}


async function get_result(trackList) {
    try {
        let res = await axios(request_track_result(trackList));
        console.log('suc',JSON.stringify(res.data));
        return res.data;
    }catch (err){
        console.log("err", JSON.stringify(err.data));
        return new Error(err.data);
    }
}

// get_result('RL754785561CN');
export default get_result;