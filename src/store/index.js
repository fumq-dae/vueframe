import Vue from 'vue';
import Vuex from 'vuex';
import Admin from './modules/admin';
import Demo from './modules/demo';
Vue.use(Vuex);

let store=new Vuex.Store({
    modules:{
        admin:Admin,
        demo:Demo
    }
})
export default store;
