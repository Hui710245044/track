const props = [
    'second',
    'minute',
    'hour',
    'day',
    'week',
];
class _ {
    constructor(datetime){
        this.__now = this.init(datetime);
    }
    init(datetime){
        if(datetime){
            return new Date(datetime);
        }else{
            return new Date();
        }
    }
    addMSec(msec){
        this.__now.setTime(this.__now.getTime()+msec);
    }
    subMSec(msec){
        this.__now.setTime(this.__now.getTime()-msec);
    }

    addSec(sec){
        this.addMSec(sec * 1000);
    }
    subSec(sec){
        this.subMSec(sec * 1000);
    }

    addMin(min){
        this.addSec(min * 60);
    }
    subMin(min){
        this.subSec(min * 60);
    }

    addHour(hour){
        this.addMin(hour * 60);
    }
    subHour(hour){
        this.subMin(hour * 60);
    }
    call_(func, ...argvs){
        return this.__now[func].apply(this.__now, argvs);
    }
}
export default function(datetime){
    return new Proxy(new _(datetime),{
        get(target,prop, receiver){

        },
        set(target, prop, value, receiver){
            if(props.includes(prop)){
                [H,...O] = prop.split('');
                prop = [H.toUpperCase(),...O,'s'].join('');
                target.call_(value);
            }
        }
    })
}