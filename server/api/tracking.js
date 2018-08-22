import {Router} from 'express'
import TrackNumber from '../model/track_number';

const router = Router();


/* GET tracking listing. */
router.get('/tracking-list', async function (req, res, next) {
    const tracks = await TrackNumber.findAll({
        where:{
            from_tag:req.query.excelId
        }
    });
    res.json({list:tracks})
});

/* GET tracking listing. */
router.get('/tracking-list/get-one', async function (req, res, next) {
    console.log(req.query.tracking);
    let tracing_list = await findOne({
        tracking: req.query.tracking,
    });
    res.json(tracing_list)
});


export default router