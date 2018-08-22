import spiderModule from './spider-module';
import Queue from './redis/queue';
import './common';
module.exports = async (channel, count) => {
    const queue = new Queue(`wait-process-track-${channel}`);
    let readyCount = 0;
    let data;
    let tracks = [];
    let empty = false;
    while ((readyCount < count) && !empty){
        if(data= await queue.pop()){
            tracks.push(data);
            readyCount++;
        }else{
            empty = true;
        }
    }
    if(tracks.length){
        try{
            await spiderModule(channel, tracks)
            return true;
        }catch (e) {
            return false;
        }
    }else{
        return false;
    }
};