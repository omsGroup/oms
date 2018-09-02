<template>
    <div id="canvas" 
         class="login-pages flex-center-center">
        <div class="login-box flex-center-center">
            
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
        let confirmPassword = (rule, value, callback) => {
            if (value === "") {
                callback(new Error("请输入密码"))
            } else if (value !== this.form.password) {
                callback(new Error("两次输入密码不同"))
            } else {
                callback()
            }
        }
        let confirmCaptcha = (rule, value, callback) => {
            let reg = /^\d{3}\b/
            if (value === "") {
                callback(new Error("请输入验证码"))
            } else if (value.length !== 3 || !reg.test(value)) {
                callback(new Error("请输入验证码"))
            } else {
                callback()
            }
        }
        return {
            admin:{
                username: "root",
                password: "root123"
            },
            form: {
                username: "",
                password: "",
                captcha: "",
                confirmPass: ""
            },
            loginRules: {
                userName: [{
                    required: true,
                    message: "请输入用户名",
                    trigger:'blur'
                }],
                pass: [{
                    required: true,
                    message: "请输入证码",
                    trigger:'blur'
                }],
                confirmPass: [{
                    required: true,
                    validator: confirmPassword,
                }],
                captcha: [{
                    validator: confirmCaptcha,
                    trigger: ["blur", "change"]
                }]
            },
            renderer:'', 
            scene:'', 
            camera:'', 
            composer:'', 
            circle:'', 
            particle:'', 
            luminor:'', 
            halo:'', 
            galaxy:'',
            lights : []
        }
    },
    mounted() { 
        this.init();
        this.animate();
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
        position: relative;
    }

</style>
