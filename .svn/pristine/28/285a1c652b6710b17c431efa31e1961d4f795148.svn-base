// ganticn
//http://www.gaticn.com/site/tracking.html
//使用    印度电商包裹  印度电商包裹(深圳仓)   印度电商包裹(带电产品深圳仓)

let axios = require('axios');
function request_track_result(trackList) {
    return {
        'url': `http://www.gaticn.com/api/v1/track/queryByTrackNum?trackNums=${trackList}&ntype=100`,
        'method': 'get',
        'headers': {
            'Host': 'www.gaticn.com',
            'Connection': 'keep-alive',
            'Pragma': 'no-cache',
            'Cache-Control': 'no-cache',
            'Accept': 'application/json, text/javascript, */*; q=0.01',
            'Origin': 'http://www.gaticn.com',
            'X-Requested-With': 'XMLHttpRequest',
            'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'Referer': 'http://www.gaticn.com/site/tracking.html' ,
            'Accept-Encoding': 'gzip, deflate',
            'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8 ',
            'Content-Length':'29',
        },
    };
}
 async function get_result(trackList) {
    try {
        let req=request_track_result(trackList);
       let res= await axios.get(req.url);
        if(res.data.list&&res.data.list[0]){
                // 物流信息
            let  info=res.data.list[0].Data.TrackData
            // 判定是否上网
            let online =!!info.find(row=>row.info.indexOf('In Transit')>-1)
            //判定是否妥投
            let succes=!!info.find(row=>row.info.indexOf('Signed')>-1)
            console.log("succes:",online,succes);
        }
        // return  res.data
    }catch (err){
        console.log("err", JSON.stringify(err.data));
        return new Error(err.data)
    }
}

 export default get_result;