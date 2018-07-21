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
const authorityManagement = r => require.ensure([], () => r(require('@/pages/system/authorityManagement')), 'authorityManagement');


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
            path: '',
            name: '',
            redirect:'/home',
        },{
            path: '/home',
            name: '首页',
            component: home
        }, {
            path:'/userInfo',
            name:'用户信息',
            component:userInfo
        }, {
            path:'/userAudit',
            name:'用户审核',
            component:userAudit
        }, {
            path:'/financeInfo',
            name:'财务信息',
            component:financeInfo
        }, {
            path:'/systemSetting',
            name:'系统设置',
            component:systemSetting
        },{
            path:'/authorityManagement',
            name:'权限管理',
            component:authorityManagement
        }]
    }, {
        path: '/recover',
        name: 'recover',
        component: recover
    }]
})
