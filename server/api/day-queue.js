import {Router} from 'express'
import queue from '../model/day-queue'
import * as action from "../service/action-mysql";

const router = Router();

router.get('/day-queue-panes', async (req, res, next) => {
    const
        page = req.query.page,
        pageSize = req.query.pageSize,

        where = req.query.search_val ? {track_nub: req.query.search_val} : {};

    res.json(await action.get_list(queue, where, page, pageSize))
});

export default router
