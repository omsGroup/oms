// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './vuex/store.js'
import './assets/common.less'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import * as filters from  './plugins/filters'
import * as axios from '@/axios'

Vue.prototype.$axios = axios
Object.keys(filters).forEach(key=>{
    Vue.filter(key,filters[key])
});

Vue.use(ElementUI,Vuex);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: {
        App
    },
    template: '<App/>'
})
