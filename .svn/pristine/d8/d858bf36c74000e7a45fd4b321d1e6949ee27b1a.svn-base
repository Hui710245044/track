import workerNodes from 'worker-nodes';
import path from 'path';

console.log("test:"+process.pid);
const test1 = new workerNodes(path.resolve(__dirname, "spider-module"), {
    maxTasks:1,
    maxWorkers:1
});
test1.call("cainiao",["ssss","ssss"]).then(res =>{
    console.log(`inner ${res}:${process.pid}`);
}).catch(fail =>{
    console.log(JSON.stringify(fail));
    console.log(`fail  ${process.pid}:${fail}; ${fail.messages}`)
});
