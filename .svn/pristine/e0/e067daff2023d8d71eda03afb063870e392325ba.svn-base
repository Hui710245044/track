import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const map = require.context('./modules',true,/[\w]+\.js/);
const modules = {};
map.keys().forEach(key=>{
    let name = /[\w\W]+\/([0-9a-z\-]+).js/ig.exec(key)[1];
    modules[name] = map(key).default;
});
const store = new Vuex.Store({
    modules:modules,
    state: {
        id:'',
    },
    getters: {
      _id(state){
        return state.id
      }
    },
    mutations: {
      _id(state,id){
          state.id = id;
      }
    },
    actions: {
      _id1({commit},id){
        commit('_id',id)
      }
    },
});
export default  store;
