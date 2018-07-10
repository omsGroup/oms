<template>
    <div class="aside-pages">
        <ul>
            <li>
                <span class="iconfont icon-all"></span>
                <span class="aside-name">首页</span>
            </li>
            <li>
                <span class="iconfont icon-all"></span>
                <span class="aside-name">首页</span>
            </li>
            <li>
                <span class="iconfont icon-all"></span>
                <span class="aside-name">首页</span>
            </li>
            <li>
                <span class="iconfont icon-all"></span>
                <span class="aside-name">首页</span>
            </li>
            <li>
                <span class="iconfont icon-all"></span>
                <span class="aside-name">首页</span>
            </li>
            <li>
                <span class="iconfont icon-all"></span>
                <span class="aside-name">首页</span>
            </li>
        </ul>
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

    }
}    
</script>
<style lang="less">
    .aside-pages{
        width: 100%;
        height: 100%;
        ul{
            margin: 0;
            padding: 20px 0 0 0;
           li{
            color: #fff;
            display: flex;
            align-items: center;
            height: 60px;
            padding-left:20px;
            cursor: pointer;
            .aside-name{
                margin-left: 10px;
                font-size: 16px;
            } 
        } 
        }
    }
</style>

