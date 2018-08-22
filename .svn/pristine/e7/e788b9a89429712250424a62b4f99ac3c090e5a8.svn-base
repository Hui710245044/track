import {Router} from 'express';
import TrackNumber from '../model/track_number';
const router = Router();
import {subscribe, unsubscribe} from '../model/client_topic'
import {addClient} from "../model/client";

router.post('/import-tracks', async function(req, res){
    const tracking = req.body.tracking;
    const identify = req.body.identify;
    const stime = req.body.startTime;
    const etime = req.body.deliveredEndTime;
    const onlineEndTime = req.body.onlineEndTime;
    const code = req.body.shippingCode;
    const urgent = !!req.body.urgent;
    const track = await TrackNumber.findOne({
        where:{
            track:tracking
        }
    });
    if(track){
        track.stime = stime;
        track.etime = etime;
        track.channel = code;
        await track.save();
        res.json({update:new Date().getTime()});
    }else{
        await TrackNumber.create({
            track:tracking,
            channel:code,
            stime:stime,
            etime:etime,
        });
        res.json({create:new Date().getTime()});
    }
    if(urgent){
    }
});

router.get('/export-tracks', async function (req, res){
    const tracks = req.query.tracks.split(',');
    const datas = await TrackNumber.findAll({
        where:{
            track:tracks
        }
    });
    const result = datas.map(track =>{
        return {
            track:track.track,
            is_online:track.is_online,
            is_succ:track.is_succ,
            last_track_time:track.updatedAt,
        }
    });
    res.json(result);
});

router.get('/subscribe', async function (req, res){
    const topic = req.query.topic;
    const auth = req.query.auth || req.get('Authentication');
    if(auth){
        await subscribe(auth.clientId, topic);
        return res.json({message:'订阅成功'});
    }else{
        return res.json({message:'订阅失败，没有认证权限'});
    }
});
router.get('/unsubscribe', async function (req, res){
    const topic = req.query.topic;
    const auth = req.query.auth || req.get('Authentication');
    if(auth){
        await unsubscribe(auth.clientId, topic);
        return res.json({message:'订阅成功'});
    }else{
        return res.json({message:'订阅失败，没有认证权限'});
    }
});

route.get('/register', async function(req, res){
    const service = req.query.service;
    if(await addClient(service)){
        res.json({message:'添加成功'});
    }else{
        res.json({message:'添加失败，已存在'});
    }
});



export default router;