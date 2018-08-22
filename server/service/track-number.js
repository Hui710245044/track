import TrackNumber from '../model/track_number';
import Queue from "../redis/queue";
export async function reprocess_tracks(){
    const tracks = await TrackNumber.findAll({
        where:{
            is_succ:0,
            is_online:0
        }
    });
    for(let track of tracks){
        await pushFastQueue(track)
    }
}

let queues = {};
async function pushFastQueue(track){
    if(queues[track.channel]){
        await queues[track.channel].pushFast(track.track);
    }else{
        queues[track.channel] = new Queue(`wait-process-track-${track.channel}`);
        await pushFastQueue(track);
    }
}

export async function track_list(where = {}, page = 1, pageSize = 20){
    page = parseInt(page);
    pageSize = parseInt(pageSize);
    return await TrackNumber.findAndCountAll({
        where,
        limit: pageSize,
        offset:(page - 1) * pageSize
    });
}
export async function track_get(data){
    return await TrackNumber.findOne({where:{id:data.id}});
}

export async function track_update(data){
    let find= await TrackNumber.findOne({where:{id:data.id}});
    if(find){
        Object.assign(find,data)
        await find.save();
    }
}
export async function track_del(id){
    let find= await TrackNumber.findOne({where:{id}});
    if(find){
        await find.destroy();
    }
}
