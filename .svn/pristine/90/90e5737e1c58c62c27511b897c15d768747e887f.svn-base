const {promisify} = require('util');
import client from '../redis/index'

const TRACK_LIST = 'track_list';

function redis_hash(track, find_channel){
        client.hexists("track_hash", track, function (err, res) {
            if(err){
                console.log(err);
            }else {
                if(res === 0){
                    console.log(`${track}不在hash中`, res);
                    save_to_hash(track);

                    save_to_list(track);// 保存到一个平台
                }else {
                    console.log(`${track}已存在`)
                }
            }
        });
}

function save_to_hash(track){
    // 存入hash
    client.hset('track_hash', track, '', (err, res)=>{
        if(err){
            console.log('save_to_hash',err)
        }else {
            console.log(`保存到hash成功${res}`)
        }
    })
}


function save_to_list(track) {
    // 存入list
    client.rpush(TRACK_LIST, track, (err, res)=>{
        if(err){
            console.log('save_to_list',err)
        }else {
            console.log(`保存到list成功${res}`)
        }
    });
}

function save_to_list_cainiao(track) {
    // 存入list
    client.rpush('track_list_cainiao', track, (err, res)=>{
        if(err){
            console.log('save_to_list',err)
        }else {
            console.log(`保存到list成功${res}`)
        }
    });
}


function save_to_list_trackmore(track) {
    // 存入list
    client.rpush('track_list_trackmore', track, (err, res)=>{
        if(err){
            console.log('save_to_list',err)
        }else {
            console.log(`保存到list成功${res}`)
        }
    });
}




async function pop_list_promise(){
    const lpopAsync = promisify(client.rpop).bind(client);
    try {
        let res = await lpopAsync(TRACK_LIST);
        console.log(`${res}移出队列`);
        return res;
    }catch (err){
        console.log('shift_list_promise',err);
    }

}

async function get_list_len(){
    const llenAsync = promisify(client.llen).bind(client);
    try{
        let res = await llenAsync(TRACK_LIST);
        console.log(`list长度还有${res}`);
        return res
    }catch (err){
        console.log('get_list_len',err);
    }
}

async function push_list_promise(track){
    const lpushAsync = promisify(client.lpush).bind(client);
    try{
        let res = await lpushAsync(TRACK_LIST, track);
        console.log(`${track}重新压入队列， ${res}`)
    }catch (err){
        console.log('push_list_promise',err);
    }
}



// erp 推送
function redis_erp(item){
    client.hexists("track_erp_hash", item.tracking, function (err, res) {
        if(err){
            console.log(err)
        }else {
            if(res === 0){
                //save_to_erp_hash(item.tracking);
                let jsonString = JSON.stringify(item);
                console.log("test", jsonString);
                save_to_erp_list(jsonString);
            }
        }
    });
}
function save_to_erp_hash(track){
    client.hset('track_erp_hash', track, '', (err, res)=>{
        if(err){
            console.log('save_to_hash',err)
        }else {
            console.log(`保存到hash成功${res}`)
        }
    })
}
function save_to_erp_list(item){
    client.rpush('track_erp_list', item, (err, res)=>{
        if(err){
            console.log('save_to_list',err)
        }else {
            console.log(`保存到list成功${res}`)
        }
    });
}
async function pop_list_erp_promise() {
    const lpopAsync = promisify(client.rpop).bind(client);
    try {
        let res = await lpopAsync('track_erp_list');
        console.log(`${res}移出队列`);
        return res;
    }catch (err){
        console.log('shift_list_promise',err);
    }
}
async function get_list_erp_len() {
    const llenAsync = promisify(client.llen).bind(client);
    try{
        let res = await llenAsync('track_erp_list');
        console.log(`list长度还有${res}`);
        return res
    }catch (err){
        console.log('get_list_len',err);
    }
}
async function push_list_erp_promise(track) {
    const lpushAsync = promisify(client.lpush).bind(client);
    try{

        let jsonString = JSON.stringify(track);
        console.log("test", jsonString);
        let res = await lpushAsync('track_erp_list', jsonString);
        console.log(`${track}重新压入队列， ${res}`)
    }catch (err){
        console.log('push_list_promise',err);
    }
}

export {
    save_to_list,
    redis_hash,
    pop_list_promise,
    get_list_len,
    push_list_promise,
    redis_erp,
    pop_list_erp_promise,
    get_list_erp_len,
    push_list_erp_promise
}