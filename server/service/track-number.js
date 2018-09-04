import TrackNumber from '../model/track_number';
import TracknumberDay from '../model/tracknumber_day';

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
/**
 * 初始化一天的队列数据
 * @param day yyyy-mm-dd
 * @returns {Promise<void>}
 */
export async function init_day_list(day){
    const btime = day;
    const etime = day;
    const tracks = await TrackNumber.findAndAll({
        where:{
            ptime:{
                $gt:btime,
                $gl:etime
            },
            is_succ:0
        }
    });
    const queue  = create_queue(day);
    for(track of tracks){
        const tracknumberDay =  await TracknumberDay.build({
            day:day,
            channel:track.channel,
            tracknumber:track,
            status:0
        });
        await  queue.push({id:tracknumberDay.id, track:tracknumberDay.track})
    }
}

export async function process_day_track_queue(day){
    let queue = new Queue(day);
    let data ;
    while(data = await queue.pop()){
        await process_track(data);
    }
}

async function process_track({id, track}){
    let tracknumDay = await TracknumberDay.findOne({
        where:{
            id
        }
    });
    let {isSucc, isOnline} = await process_splider(tracknumDay);
}

/**
 *
 * @param day yyyy-mm-dd
 * @returns {Promise<void>}
 */
async function create_queue(day){
    return new Queue(`track-day:${day}`);
}
