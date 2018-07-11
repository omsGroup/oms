<template>
    <div class="aside-pages">
        <el-menu :default-active="$route.path" 
                 :router="true"
                 class="el-menu-demo"
                 text-color="#fff"
                 active-text-color="#ffd04b"
                 background-color="#324057" 
                 @select="handleSelect">
            <el-menu-item index="/home">首页</el-menu-item>
            <el-menu-item index="/table">表格</el-menu-item>
            <el-menu-item index="3">图表</el-menu-item>
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
    }
</style>

