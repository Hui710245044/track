const nodes = require('worker-nodes');
const path = require('path');
try{
    console.log(`start!!!`);
    const worker = new nodes(path.resolve(__dirname,"channel-module"));
    worker.call(1111).then(res =>{
        console.log(`succ:${res}`);
    }).catch(fail =>{
        console.log(`fail:${fail}`);
    })
}catch (e) {
    console.log(`error:${e}`);
}