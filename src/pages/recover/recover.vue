<template>
    <div class="recover-pages flex-center-center">
        <div class="recover-box flex-center-center">
            <el-form ref="form"
                     :model="form"
                     :rules="recoverRules"
                     label-width="85px"
                     status-icon>
                <el-row>
                    <el-col :span="24">
                        <el-form-item label="邮箱:"
                                      prop="email">
                            <el-input v-model="form.email"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item label="密码:"
                                      prop="pass">
                            <el-input v-model="form.pass"
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
                </el-row>
                <div class="recover-button">
                    <el-button type="primary"
                               @click="confirmRecover">确认找回</el-button>
                    <el-button @click="backLogin">返回</el-button>
                </div>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        let confirmPassword = (rule, value, callback) => {
            if (value === "") {
                callback(new Error("请输入密码"))
            } else if (value !== this.form.pass) {
                callback(new Error("两次输入密码不同"))
            } else {
                callback()
            }
        }
        return {
            form: {
                email: "",
                pass: "",
                confirmPass: ""
            },
            recoverRules: {
                pass: [{
                    required: true,
                    pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/,
                    message: "请输入6-12位数字+字母验证码",
                    trigger:'blur'
                }],
                confirmPass: [{
                    required: true,
                    validator: confirmPassword,
                }],
                email:[{
                    required:true,
                    pattern:/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
                    message:'请输入正确的邮箱',
                    trigger:'blur'
                }]
            }
        }
    },
    methods: {
        confirmRecover() {
            this.$refs.form.validate((valid) => {
                if (valid) {
                    this.$message.success("密码成功找回");
                    this.$router.replace('/');
                }
            })
        },
        backLogin() {
            this.$router.replace('/');
        }
    }
}
</script>

<style lang="less">
    .recover-pages {
        width: 100%;
        height: 100%;
        background: gray;
        .recover-box {
            width: 300px;
            min-height: 280px;
            padding: 25px 40px 25px 20px;
            background: white;
        }
        .recover-button {
            display: flex;
            padding-left: 20px;
            padding-top: 15px;
            justify-content: space-between;
        }
    }

</style>
