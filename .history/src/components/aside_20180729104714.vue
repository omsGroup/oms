<template>
    <div class="aside-pages">
        <el-menu :default-active="$route.path"
                 :router="true"
                 :unique-opened="true"
                 class="el-menu-demo"
                 text-color="#fff"
                 active-text-color="#ffd04b"
                 background-color="#324057"
                 @select="handleSelect">
            <el-menu-item index="/home">
                <svg class="icon" 
                     aria-hidden="true">
                    <use xlink:href="#icon-shanchu"></use>
                </svg>
                <span>首页</span>
            </el-menu-item>
            <el-submenu v-for="(item,index) in tabList"
                        :key="index"
                        :index="item.path">
                <template slot="title">
                    <svg class="icon" 
                         aria-hidden="true">
                        <use xlink:href="#icon-shanchu"></use>
                    </svg>
                </template>
                <el-menu-item v-for="(items,indexs) in item.options" 
                              :key="indexs" 
                              :index="items.path">{{ items.label }}</el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
</template>
<script>
import Vue from 'vue';

export default{
    data(){
        return {
            tabList:[
                {label:'用户',path:'/user',icon:'icon-favorite',options:[{label:'用户信息',path:'/userInfo'}]},
                {label:'审核',path:'/audit',icon:'icon-edit',options:[{label:'用户审核',path:'/userAudit'}]},
                {label:'财务',path:'/finance',icon:'icon-gifts',options:[{label:'财务信息',path:'/financeInfo'}]},
                {label:'系统',path:'/system',icon:'icon-set',options:[{label:'系统设置',path:'/systemSetting'},{label:'权限管理',path:'/authorityManagement'}]}
            ]
        }
    },
    methods:{
        handleSelect(val,keyPath){
            
        },
    }
}    
</script>
<style lang="less">
    .aside-pages{
        width: 100%;
        height: 100%;
        .iconfont{
            margin-right:10px;
        }
    }
</style>

