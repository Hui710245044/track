import fs from 'fs';
import xlsx from 'node-xlsx';


export const excelToJson = (data,cb='excel')=>{
    const stream = cb='excel'?base64tostream(data.content):Buffer.from(data.content, 'base64');
    fs.writeFileSync(`${__dirname}/${data.name}`, stream);
    return   cb==='excel'?get_excel(data):get_json(data)
};
//处理excel
function get_excel(data) {
    let workSheetsFromBuffer = xlsx.parse(`${__dirname}/${data.name}`);
    return output(workSheetsFromBuffer, data.name);
}
//处理json
function get_json(data) {
    var result=JSON.parse(fs.readFileSync(`${__dirname}/${data.name}`));
        if(result instanceof  Array){
            return result
        }else {
            return [result]
        }

}

function base64tostream(base64){
    const start = base64.indexOf(',');
    let content = base64.substr(start+1);
    content = content.replace(' ', "+");
    return Buffer.from(content, 'base64');
}

function output(workSheetsFromBuffer, excelName) {
    let obj =  workSheetsFromBuffer[0];
    if(!(obj instanceof Object) || !(workSheetsFromBuffer[0].data instanceof Array)){
        return {
            status: 0,
            msg: 'Excel有误'
        }
    }
    let titleArr = workSheetsFromBuffer[0].data[0];
    //console.log("test", workSheetsFromBuffer[0].data)
    let trackingIndex = titleArr.indexOf('发货追踪号');
    let identifyIndex = titleArr.indexOf('平台标识');
    let startTimeIndex = titleArr.indexOf('开始查询时间');
    let endTimeIndex = titleArr.indexOf('结束查询时间');
    if(trackingIndex === -1){
        return {
            status: 0,
            msg: '缺少发货追踪号'
        }
    }
    let result = [];
    workSheetsFromBuffer[0].data.forEach((item,index)=>{
        if(index > 0){
            let startTime, endTime;

            let startTimeString = (!!item[startTimeIndex]) && item[startTimeIndex].replace(/_/g,'/');
            let endTimeString = (!!item[endTimeIndex]) && item[endTimeIndex].replace(/_/g,'/');
            if(!isNaN(new Date(startTimeString).getTime()) && !!(new Date(startTimeString).getTime())){
                startTime = new Date(startTimeString).getTime();
            }else {
                startTime = new Date().getTime();
            }

            if(!isNaN(new Date(endTimeString).getTime()) && !!(new Date(endTimeString).getTime())){
                endTime = new Date(endTimeString).getTime()
            }else {
                endTime = new Date().getTime() + 2592000000;
            }
            //console.log(typeof item[trackingIndex], item[trackingIndex]);
            let arr =(item[trackingIndex]+'').split(/\s+/); // excel表有可能一个格里有多个追踪号

            //console.log(arr);
            result.push(...(arr.map(row=>{
                return {
                    excelName: excelName,
                    tracking:row,
                    identify: item[identifyIndex],
                    startTime: startTime,
                    endTime: endTime,
                    info: {},
                    isSuc:false,
                    isOnline:false
                }
            })))
        }
    });
    return {
        status: 1,
        msg: '上传成功',
        data: result
    }

}