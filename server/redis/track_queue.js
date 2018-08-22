import redis from './index';

/**
 * 未处理的跟踪号队列
 * @type {string}
 */
const TRACK_QUEUE = 'track_queue';

export async function pop_track_queue(queue){
    return await redis.lpop(`${TRACK_QUEUE}:${queue}`);
}

export async function push_track_queue(track, queue){
    return await redis.lpush(`${TRACK_QUEUE}:${queue}`, track);
}

export async function push_tracks_queue(tracks, queue){
    let key = TRACK_QUEUE;
    if(queue){
        key = `${TRACK_QUEUE}:${queue}`;
    }
    tracks.unshift(key);
    await redis.lpush.apply(redis,tracks);
}