<template>
    <div class="layout-pages">
        <div class="layout-aside">
            <Aside/>
        </div>
        <div class="layout-content">
            <div class="content-header">
                <Header></Header>
            </div>
            <div class="content-body">
                <div class="content-nav-tab">
                    <el-tabs v-model="currTabs" 
                             type="card" 
                             closable
                             @tab-remove="handleTabsEdit">
                        <el-tab-pane v-for="(item,index) in author"
                                     :key="index" 
                                     :label="item.title"
                                     :name="item.name">
                        </el-tab-pane>
                    </el-tabs>
                </div>
                <div class="content-inner-page">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Vue from 'vue';
import Aside from './aside.vue'
import Header from './header.vue'

export default {
    components:{
        Aside,
        Header
    },
    data() {
        return {
            
        }
    },
    computed:{
        author(){
            return this.$store.state.tabsData;
        },
        currTabs(){
            return this.$store.state.currTabs
        }
    },
    mounted(){
    },
    methods:{
        handleTabsEdit(targetName){
            this.author.splice(this.author.findIndex(item=>item.name===targetName),1);
            localStorage.setItem('tabsData',JSON.stringify(this.author))
        }
    }
}

</script>
<style lang="less">
.layout-pages{
    width: 100%;
    min-width: 1080px;
    height:100%;
    min-height: 600px;
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    .layout-aside{
        width: 200px;
        height: 100%;
        background: rgb(50, 64, 87);
    }
    .layout-content{
        width: 100px;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        .content-header{
            height: 60px;
            align-items: center;
        }
        .content-body{
            height: 100px;
            flex-grow: 1;
            padding:20px;
            .content-inner-page{
                width: 100%;
                height:100%;
                box-sizing: border-box;
                padding:20px;
                border:1px solid #dfe6ec;
                overflow-y: scroll;
            }
        }
    }
}

</style>
