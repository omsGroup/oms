<template>
    <div class="aside-pages">
        <el-menu :default-active="$route.path" 
                 :router="true"
                 class="el-menu-demo"
                 text-color="#fff"
                 active-text-color="#ffd04b"
                 background-color="#324057" 
                 @select="handleSelect">
            <el-menu-item index="/home">
                <span class="iconfont icon-all"></span><span>首页</span>
            </el-menu-item>
            <el-submenu index="">
                <template slot="title"><span class="iconfont icon-form"></span><span>表格</span></template>
                <el-menu-item index="/table">选项1</el-menu-item>
                <el-menu-item index="">选项2</el-menu-item>
                <el-menu-item index="">选项3</el-menu-item>
            </el-submenu>
            <el-submenu index="">
                <template slot="title"><span class="iconfont icon-edit"></span><span>我的工作台</span></template>
                <el-menu-item index="">选项1</el-menu-item>
                <el-menu-item index="">选项2</el-menu-item>
                <el-menu-item index="">选项3</el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
</template>
<script>
import Vue from 'vue';

export default{
    data(){
        return {

        }
    },
    methods:{
        handleSelect(val){
            console.log(val)
        }
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

