import {process_day_tracks} from "./service/day-track";

const schedule = require('node-schedule');
import {reprocess_tracks} from './service/track-number';

// 定时任务，每天0点0分定时执行
schedule.scheduleJob({hour: 0, minute: 0}, async function () {
    await reprocess_tracks();
});


schedule.scheduleJob("20 * * * * *", async function () {
    // await reprocess_tracks();
});

schedule.scheduleJob("30 25 11 * * *", async function () {
    console.log(`process_day_tracks`);
    await process_day_tracks();
});