import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
const recover = r => require.ensure([], () => r(require('@/pages/recover/recover')), 'recover');
const layout = r => require.ensure([], () => r(require('@/components/layout')), 'layout');
const home = r => require.ensure([], () => r(require('@/pages/home/home')), 'home');
const userInfo = r => require.ensure([], () => r(require('@/pages/user/userInfo')), 'userInfo');
const userAudit = r => require.ensure([], () => r(require('@/pages/audit/userAudit')), 'userAudit');
const financeInfo = r => require.ensure([], () => r(require('@/pages/finance/financeInfo')), 'financeInfo');
const systemSetting = r => require.ensure([], () => r(require('@/pages/system/systemSetting')), 'systemSetting');

Vue.use(Router);

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
            path:'/userInfo',
            name:'userInfo',
            component:userInfo
        }, {
            path:'/userAudit',
            name:'userAudit',
            component:userAudit
        }, {
            path:'/financeInfo',
            name:'financeInfo',
            component:financeInfo
        }, {
            path:'/systemSetting',
            name:'systemSetting',
            component:systemSetting
        }]
    }, {
        path: '/recover',
        name: 'recover',
        component: recover
    }]
})
