<template>
    <div id="canvas" 
         class="login-pages flex-center-center">
        <div class="login-box flex-center-center">
            <div class="login">login</div>
        </div>
    </div>
</template>
<script>
import echart from 'echarts'
import Vue from 'vue'
import * as THREE from 'three'
import defaultImg from '../assets/images/Generic_Celestia_asteroid_texture.jpg'

export default {
    data() {
        return {
            form: {
                username: "",
                password: "",
            },
        }
    },
    mounted() {
        
    },
    destory(){
        THREE.Cache.clear()
    },
    methods: {
        submitLogin() {
            localStorage.clear();
            this.$refs.form.validate((valid) => {
                if (valid) {
                    this.$axios.postFormat('/v1/login',this.form).then((res)=>{
                        localStorage.setItem('userInfo',JSON.stringify(res.data))
                        this.$message.success("登录成功");
                        this.$router.replace('/layout');
                    }).catch((error)=>{
                        this.$message.error('登录失败')
                    })
                }
            })
        },
    }
}

</script>
<style lang="less">
    .login-pages {
        width: 100%;
        height: 100%;
        .login-box{
            width: 600px;
            height:600px;
        }
    }

</style>
