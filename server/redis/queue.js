import redis from './index';

 class Queue {
    constructor(key){
        this.__key = key
    }
    getSetKey(){
        return `queue:common:${this.__key}:set`
    }
    getQueueKey(){
        return `queue:common:${this.__key}:queue`
    }

    async isLockKey(){
        return parseInt(await redis.incr(`queue:common-lock:${this.__key}`)) > 1;
    }

    async unLockKey(){
        await redis.del(`queue:common-lock:${this.__key}`);
    }

    async push(data){
        if(await this.isLockKey()){
            await setTime(200);
            await this.push(data);
        }else{
            data = JSON.stringify(data);
            let isNotMember = !await redis.sismember(this.getSetKey(), data);
            if(isNotMember){
                await redis.sadd(this.getSetKey(), data);
                await redis.lpush(this.getQueueKey(), data);
            }
            await this.unLockKey();
        }
    }

    async pushFast(data){
        if(await this.isLockKey()){
            await setTime(200);
            await this.pushFast(data);
        }else{
            data = JSON.stringify(data);
            let isNotMember = !await redis.sismember(this.getSetKey(), data);
            if(isNotMember){
                await redis.sadd(this.getSetKey(), data);
            }
            await redis.rpush(this.getQueueKey(), data);
            await this.unLockKey();
        }
    }

    async pop(){
        const data = await redis.rpop(this.getQueueKey());
        if(data){
            if(await redis.srem(this.getSetKey(), data)){
                return JSON.parse(data)
            }
            return await this.pop();
        }else{
            return false;
        }
    }
    async length(){
        return await redis.slen(this.getSetKey()) || 0;
    }

     async elements(){
        return await redis.smembers(this.getSetKey()) || [];
     }
}

export default Queue;