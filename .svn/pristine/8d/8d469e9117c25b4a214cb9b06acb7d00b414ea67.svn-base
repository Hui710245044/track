import redis from './index';

const NEED_TRACK = 'need_track';

export async function addNeedTrack(track){
    await redis.sadd(NEED_TRACK, track);
}

const HASH_TRACK_CHANNEL = 'hash_track_channel';
export async function track_channel_get(track){
    return await redis.hget(HASH_TRACK_CHANNEL, track)  || "CN";
}

const DEFAULT_CHANNEL_SPIDER_WORKER = 1;
export async function channel_spider_worker_get(channel){
    return await redis.hget("channel_spider_worker", channel) || DEFAULT_CHANNEL_SPIDER_WORKER;
}

export async function channel_spider_worker_set(channel, worker){
    return await redis.hset("channel_spider_worker", channel, worker);
}


export async function track_channel_set(track, channel){
    return await redis.hset(HASH_TRACK_CHANNEL, track, channel);
}