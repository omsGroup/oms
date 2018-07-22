<template>
    <div class="header-pages">
        <span>BWW后台</span>
        <div class="login-out" 
             @click="loginOut">退出登录</div>
    </div>
</template>
<script>
export default{
    data(){
        return {
            form:{

            }
        }
    },
    methods:{
        loginOut(){
            localStorage.clear();
            this.$router.replace('/')
        }
    }
}    
</script>
<style lang="less">
.header-pages{
    width: 100%;
    height: 100%;
    display: flex;
    padding:0 20px;
    align-items: center;
    justify-content: space-between;
    background:#eff2f7;
    box-sizing: border-box;
}
.login-out{
    padding-right:25px;
    cursor:pointer;
}

</style>

