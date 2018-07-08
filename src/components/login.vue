<template>
    <div class="login-pages flex-center-center">
        <div class="login-box flex-center-center">
            <el-form ref="form"
                     :model="form" 
                     :rules="loginRules"
                     label-width="85px">
                <el-row>
                    <el-col :span="24">
                        <el-form-item label="用户名:" 
                                      prop="userName">
                            <el-input v-model="form.userName"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item label="密码:" 
                                      prop="pass">
                            <el-input v-model="form.pass"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item label="确认密码:" 
                                      prop="confirmPass">
                            <el-input v-model="form.confirmPass"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item label="验证码:"
                                      label-width="80px"
                                      prop="captcha">
                            <el-input v-model="form.captcha"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <div class="login-button">
                    <el-button type="primary" 
                               @click="submitLogin">登录</el-button>
                    <el-button type="primary"
                               @click="retrievePass">找回密码</el-button>
                    <el-button type="primary"
                               @click="submitLogin">注册</el-button>
                </div>
            </el-form>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        let confirmPassword=(rule,value,callback)=>{
            if(value===''){
                callback(new Error('请输入密码'))
            }else if(value!==this.form.pass){
                callback(new Error('两次输入密码不同'));
            }else{
                callback();
            }
        };
        let confirmCaptcha=(rule,value,callback)=>{
            let reg=/^\d{4}\b/;
            console.log(reg.test(1234))
            if(value ===''){
                callback(new Error('请输入验证码'))
            }else if(value.length !== 4 || !reg.test(value)){
                callback(new Error('请输入四位数字验证码'))
            }else{
                callback()
            }
        }
        return {
            form: {
                userName:'',
                pass:'',
                captcha:'',
                confirmPass:''
            },
            loginRules:{
                userName:[
                    {required:true,message:'请输入用户名',trigger:'blur'}
                ],
                pass:[
                    {required:true,message:'请输入6-12位数字+字母验证码',trigger:'blur'}
                ],
                confirmPass:[
                    {required:true,validator:confirmPassword,trigger:'blur'}
                ],
                captcha:[
                    {validator:confirmCaptcha,trigger:['blur','change']},
                ]
            }
        }
    },
    mounted() {
        console.log(123)
    },
    methods: {
        submitLogin() {
            this.$refs.form.validate((valid)=>{
                if(valid){
                    this.$message.success('登录成功')
                }
            })
        },
        retrievePass(){

        }
    }
}

</script>
<style lang="less">
    .login-pages {
        width: 100%;
        height: 100%;
        background: gray;
        .login-box {
            width: 300px;
            min-height: 280px;
            padding: 25px 40px 25px 20px;
            background: white;
        }
        .login-button {
            display: flex;
            padding-left: 20px;
            padding-top: 15px;
            justify-content: space-between;
        }
    }

</style>
