import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/components/login'
const layout = r => require.ensure([], () => r(require('@/components/layout')), 'layout');

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'login',
        component: login
    }, {
        path: '/layout',
        name: 'layout',
        component: layout
    }]
})