import TrackNumber from "../model/track_number";
import Channels from "../channel";
import Queue from "../redis/queue";
import WorkerNode from 'worker-nodes';
import path from 'path';

export async function process_day_tracks(){
    await Object.keys(Channels).forEach(async function(channel){
        await process_channel_day_tracks(channel);
    });
    await startup();
}

export async function process_channel_day_tracks(channel){
    const waitProcessTrack = new Queue(`wait-process-track-${channel}`);
    const nowtime = now();
    const tracks = await TrackNumber.findAll({
        where:{
            is_succ:0,
            channel,
            // stime:{
            //     '$gt':nowtime
            // },
            // ptime:{
            //     '$gt':nowtime
            // }
        }
    });
    console.log(`channel :${channel} count : ${tracks.length}`)
    for(let track of tracks){
        await waitProcessTrack.push(track.track);
    }
}


async function startup(){
    await Object.keys(Channels).forEach(async channel =>{
        let worker = new WorkerNode(path.resolve(__dirname,"../channel-module"));
        try{
            await worker.call(channel, 1);
        }catch (e) {
            console.log(e);
        }
    });
}

export async function day_queue_panes(){
    return await Promise.all([
        {label:`2018-4-2`}
    ].map(async day =>{
        return Object.assign({},day,await day_queue_data(day.label))
    }));
}

export async function day_queue_data(key){
    return {};
}