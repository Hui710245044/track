import UserAgents from "./helper/user-agents";
let axios = require('axios');
export default {
    async post(url, data, headers = {}, proxy){
        const request = {
            method: 'POST',
            url,
            headers:Object.assign({},headers, {'User-Agent':UserAgents.randomOne()}),
            data,
        };
        return axios(request);
    },

    async query(url, data, headers = {}, proxy){
        const request = {
            method: 'GET',
            url,
            headers:Object.assign({},headers, {'User-Agent':UserAgents.randomOne()}),
        };
        return axios(request);
    }
};