import Queue from '../redis/queue';
import Channels from '../channel';
export async function channels_queue(){
    return await Promise.all(Object.keys(Channels).map(async channel =>{
        return Object.assign({queues:await channel_queue(channel)}, Channels[channel]);
    }))
}
export async function channel_queue(channel){
    let queue = new Queue(`wait-process-track-${channel}`);
    return await queue.elements();
}