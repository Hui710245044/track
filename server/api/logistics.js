import {Router} from 'express'
import logistics from '../model/logistics'
import * as action from "../service/action-mysql";

const router = Router();

router.get('/logistics', async  (req, res, next)=> {
    const
        page = req.query.page,
        pageSize = req.query.pageSize,
        where = req.query.search_val?{name:req.query.search_val}:{}
    res.json(await action.get_list(logistics,where,page,pageSize))
});

export default router