import { Router } from 'express';
const router = Router();
// import request_track_result from './carrier/aliexpress'
import request_track_result from './carrier/17track'

router.get('/tttt', async function(req,res, next){
    // await request_track_result(["LP00093893713341"]);
    await request_track_result(["MXAHN6032212697YQ"]);
    res.send('ok');
});
router.get('/proxy', async function(req,res, next){

    res.send('ok');
});

export default router;