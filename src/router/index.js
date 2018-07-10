import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/components/login'
const layout = r => require.ensure([], () => r(require('@/components/layout')), 'layout');
const home = r => require.ensure([], () => r(require('@/pages/home/home')), 'home');
const table = r => require.ensure([], () => r(require('@/pages/table/table')), 'table');

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'login',
        component: login
    }, {
        path: '/layout',
        name: 'layout',
        component: layout,
        children: [{
            path: '/home',
            name: 'home',
            component: home
        }, {
            path: '/table',
            name: 'table',
            component: table
        }]
    }]
})