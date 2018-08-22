// import "../common"
// import request from '../request';
// import {set_log} from '../model/track_log';
//
// function unique(arr) {
//     let result = [], hash = {};
//     for (let i = 0, elem; (elem = arr[i]) != null; i++) {
//         if (!hash[elem]) {
//             result.push(elem);
//             hash[elem] = true;
//         }
//     }
//     return result;
// }
//
// const headers = {
//     'Host': 't.17track.net',
//     'Connection': 'close',
//     'Pragma': 'no-cache',
//     'Cache-Control': 'no-cache',
//     'Accept': 'application/json',
//     'Origin': 'https://t.17track.net',
//     'X-Requested-With': 'XMLHttpRequest',
//     'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
//     'Referer': 'https://t.17track.net/zh-cn',
//     'Accept-Encoding': 'gzip, deflate, br',
//     'Accept-Language': 'zh-CN,zh;q=0.9 '
// };
//
// async function request_track_result(channel, trackList) {
//     if (trackList instanceof Array) {
//         trackList = unique(trackList).map(track => {
//             let fc = which_transporter(channel);
//             if(fc){
//                 return {num: track, fc};
//             }else{
//                 return {num: track};
//             }
//
//         });
//     } else {
//         trackList = [{num: trackList}]
//     }
//     console.log(trackList);
//     return new Promise((succ, fail) => {
//         request.post("https://t.17track.net/restapi/track",
//             {"guid": "", "data": trackList},
//             headers)
//             .then(async({data}) => {
//                 console.log(data);
//                 if (data.msg === 'Ok') {
//                     const result =await Promise.all(data.dat.map(async track => {
//                         let ret = {};
//                         ret.track = track.no;
//                         if (track.track.z1.length >= channel.node) {
//                             ret.is_online = true;
//                             const deliver = track.track.z1[0];
//                             ret.is_succ = deliver.z.indexOf(channel.delivered) >= 0;
//                         }
//                         await set_log(ret.track,track.track.z1);
//                         return ret;
//                     }));
//                     succ(result);
//                 } else {
//                     fail(data);
//                 }
//             }).catch(error => {
//             console.error(`error:${error}`)
//             fail(error);
//         });
//     })
// }
//
// function which_transporter(channel) {
//
// }
//
// export default request_track_result

let axios = require('axios-https-proxy-fix');


async function request_track_result(channel, trackList) {

    let options = {
        withCredentials:true,
        url: 'https://t.17track.net/restapi/track',
        method: 'POST',
        headers: {
            Cookie: '_ga=GA1.2.109845884.1523427164; _gid=GA1.2.142389324.1523427164; __gads=ID=c18f90acfaf0d637:T=1523427164:S=ALNI_MbAciAifRULZ-F91J2vyUkzrbM2hw; Last-Event-ID=657572742f6339332f31336464383161623236312f72656e6961746e6f632d70706165726f6d2d717920756e656d2d6e776f64706f726441113bb0d7412cf4fce',
            'Host': 't.17track.net',
            'Connection': 'close',
            'Pragma': 'no-cache',
            'Cache-Control': 'no-cache',
            'Accept': 'application/json, text/javascript, */*; q=0.01',
            'Origin': 'https://t.17track.net',
            'X-Requested-With': 'XMLHttpRequest',
            'User-Agent': "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36",
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'Referer': 'https://t.17track.net/zh-cn',
            'Accept-Encoding': 'gzip, deflate',
            'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,zh-TW;q=0.7,gl;q=0.6'
        },
        data: {
            "guid": "", "data": trackList.unique().map(track => {
                return {num: track};
            })
        },
        proxy:{
            host:'127.0.0.1',
            port:7878
        }
    };
    return new Promise((succ, fail) =>{
        axios(options).then(function (res) {
            console.log(res);
            if(res.data.msg === 'Ok'){
                console.log(res.data.dat);
                succ(res.data.dat);
            }else{
                fail(res);
            }
        }).catch(error => {
            console.log(error);
            fail(error);
        });
    })
}

export default request_track_result

