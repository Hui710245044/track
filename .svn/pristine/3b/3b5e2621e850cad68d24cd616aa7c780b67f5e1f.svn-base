// 给erp的api


import { Router } from 'express';
import {redis_erp} from '../controller/redis';


const router = Router();

router.post('/erp/post', async function (req, res, next) {
    console.log('req.body', req.body);
    req.body && req.body.forEach(item=>{

        redis_erp(item);
    });
    res.json('推送成功');

});

export default router