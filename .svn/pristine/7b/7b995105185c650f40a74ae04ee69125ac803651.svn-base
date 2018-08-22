const puppeteer = require('puppeteer');


async function request_track_result(channel, trackList) {
    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    page.on('response', async function(response){
        const request = response.request();
        if(request.url().indexOf("restapi/track") >= 0){
            console.log(`method:${request.method()} url:${request.url()}`)
            console.log(await response.json());
        }
    });
    trackList = trackList.join(',');
    console.log(trackList);
    await page.goto(`https://t.17track.net/zh-cn#nums=${trackList}`);
    // await browser.close();
}

export default request_track_result