import {Router} from 'express'
import logistics from '../model/logistics'

const router = Router();

router.get('/logistics', async (req, res, next)=> {
    const info = await logistics.findAll();
    res.send(info);

});

export default router