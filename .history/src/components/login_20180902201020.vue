<template>
    <div id="canvas" 
         class="login-pages flex-center-center">
        <div class="login-box flex-center-center">
            <el-form ref="form"
                     :model="form"
                     :rules="loginRules"
                     label-width="85px"
                     status-icon>
                <el-row>
                    <el-col :span="24">
                        <el-form-item label="用户名:"
                                      prop="username">
                            <el-input v-model="form.username"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item label="密码:"
                                      prop="password">
                            <el-input v-model="form.password"
                                      type="password">
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item label="确认密码:"
                                      prop="confirmPass">
                            <el-input v-model="form.confirmPass"
                                      type="password" >
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item label="验证码:"                                   
                                      prop="captcha">
                            <el-input v-model="form.captcha"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <div class="login-button">
                    <el-button type="primary"
                               @click="retrievePass">找回密码</el-button>
                    <el-button type="primary"
                               @click="submitLogin">登录</el-button>
                    <el-button type="primary"
                               @click="submitLogin">注册</el-button>
                </div>
            </el-form>
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
        background: linear-gradient(to bottom, #000 0%, #1e1e1e 50%, #000 100%);
        .login-box {
            width: 300px;
            min-height: 280px;
            padding: 25px 40px 25px 20px;
            background: white;
            position: absolute;
            right:30px;
            bottom:30px;
            background: transparent;
        }
        .login-button {
            display: flex;
            padding-left: 20px;
            padding-top: 15px;
            justify-content: space-between;
        }
        .back-echart{
            width:100%;
            height:100%;
        }
    }

</style>
