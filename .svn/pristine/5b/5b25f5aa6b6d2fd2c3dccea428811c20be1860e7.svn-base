// wish邮
let axios = require('axios');

function request_track_result(trackList) {
    return {
        url: 'https://www.shpostwish.com/apis/tracking/search',
        method: 'POST',
        headers: {
            'Host': 'www.shpostwish.com',
            'Content-Length':21,
            'Connection': 'keep-alive',
            'Pragma': 'no-cache',
            'Cache-Control': 'no-cache',
            'Accept': 'application/json, text/javascript, */*; q=0.01',
            'Origin': 'https://www.shpostwish.com',
            'X-Requested-With': 'XMLHttpRequest',
            'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.108 Safari/537.36',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept-Encoding': 'gzip, deflate',
            'Accept-Language': 'zh-CN,zh;q=0.9 '
        },
        data:'ids[]='+ trackList
    };

}


async function get_result(trackList) {
    try {
        let res = await axios(request_track_result(trackList));
        console.log('suc',JSON.stringify(res.data));
        return res.data;
    }catch (err){
        console.log("err", JSON.stringify(err.data));
        return new Error(err.data)
    }
}

// get_result('12345678900');
export default get_result;