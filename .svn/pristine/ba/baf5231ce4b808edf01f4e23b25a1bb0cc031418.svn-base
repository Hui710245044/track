/*
   url:  https://www.trackingmore.com/gettracedetail.php?express=ubi-logistics&tracknumber=4006318016176704
   methods:  get
 */

let axios = require('axios');
//let c = require('child_process');

let testTrack = 'RO590836699CN';

function isSuc(track_info) {
    let jsonString = track_info.toLocaleLowerCase();
    return ((jsonString.indexOf('delivered') !== -1) || (jsonString.indexOf('妥投') !== -1) || (jsonString.indexOf('签收') !== -1))
}
function isOnlineTime(track_info) {

    let s = track_info.substring(2, track_info.length - 1);

    let json = JSON.parse(s);

    if (!!json.originCountryData) {
        return json.originCountryData.trackinfo.length
    } else {
        return 0
    }
}

async function request_track_result(testTrack){
   try{
       let res = await axios.get(`https://www.trackingmore.com/gettracedetail.php?tracknumber=${testTrack}`);
       let is_suc = isSuc(res.data);
       let is_online_length = isOnlineTime(res.data);
       console.log("result", {
           is_suc,
           is_online_length
       });
       return {
           is_suc,
           is_online_length,
           msg:'suc'
       };
   }catch (err){
      return {
          msg:'err'
      }
   }

}

export default request_track_result
// request_track_result(testTrack);
