import axios from 'axios';

const instrance = axios.create({
       baseURL:'http://localhost:3000'
    // baseURL:'http://172.19.23.74:8081'
});

export default {
    install(Vue, options = {}){
        Vue.mixin({
            beforeCreate(){
                this.$http = instrance;
            }
        })
    }
}
