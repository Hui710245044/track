Array.prototype.randomOne = function(){
    let len = this.length;
    const nth = Math.ceil(Math.random() * len) - 1;
    return this[nth];
};

Array.prototype.unique = function() {
    let result = [], hash = {};
    let j = 0;
    for (let i = 0, elem; (elem = this[i]) != null; i++) {
        if (!hash[elem]) {
            result.push(elem);
            hash[elem] = true;
        }
    }
    return result;
};

global.setTime = async function(ms){
    return new　Promise((succ)=>{
        setTimeout(()=>{succ()}, ms)
    })
};

global.now = function(){
    return Math.round(new Date().getTime() / 1000);
};