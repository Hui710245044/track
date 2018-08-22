import { Router } from 'express'
import {get_info} from '../controller/track-info'

const router = Router();

router.get('/track/info', async function async (req, res, next) {
    res.json('查询开启');

    await get_info(req.query);// 更新到MongoDB
});

export default router