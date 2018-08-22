// ganticn
//http://www.gaticn.com/site/tracking.html
//使用  日本电商件佐川

let axios = require('axios');
const cheerio=require('cheerio')
async function get_result(trackList) {
    try {
        let url=`http://www.ydhexpress.com/Client/Show1.aspx?Source=${trackList}&Code=ydh&side=sh`;
        let res= await axios.get(url);
        if(res.data){
            let $ = cheerio.load(res.data);
            let trs=$('table:nth-child(5) tr');
            trs=Array.from(trs).slice(1);
            // table  获取到 信息
            let info= trs.map(row=>{
                // console.log("row:",row.children)
                Array.from(row.children).forEach(item=>{
                       $(item).text()
                })
            })
        }
    }catch (err){
        console.log("err", JSON.stringify(err.data));
        return new Error(err.data)
    }
}
get_result('518441702170')
//export default get_result;