import Channel from './channel';
import Spider from './spider';
import TrackNumber from "./model/track_number";
import loger from './log4js';
export default async function(channel, track){
    channel = Channel[channel];
    const spider = Spider[channel.spider].crawler;
    try{
        const result = await spider(channel, track);
        if(result){
            await result.forEach(async trackResult =>{
                loger.info(`track:${trackResult.track} isSucc ${trackResult.is_succ} isOnline ${trackResult.is_online} process finsih`);
                const track = await TrackNumber.findOne({
                    where:{track:trackResult.track}
                });
                if(track){
                    track.is_succ = trackResult.is_succ;
                    track.is_online = trackResult.is_online;
                    await track.save();
                }
            })
        }
    }catch (e) {
        console.error(e);
    }
}