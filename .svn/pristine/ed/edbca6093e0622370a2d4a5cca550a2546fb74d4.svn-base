//// 回推给erp的接口
var request = require('request');

function push_back(data) {
    request.post('http://oms.rondaful.com:8081/post?url=tracking',{form:data}, (err, res)=>{
        console.log("res", res.body);
        return res.body
    });
}
//export default push_back
 push_back({"type":1,"tracking":"ZESZE2020592005YQ","time":1520495913});


