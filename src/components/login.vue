<template>
    <div class="login-pages flex-center-center">
        <div class="login-box flex-center-center">
            <el-form ref="form"
                     :model="form"
                     :rules="loginRules"
                     label-width="85px"
                     status-icon>
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
        let confirmCaptcha = (rule, value, callback) => {
            let reg = /^\d{4}\b/
            if (value === "") {
                callback(new Error("请输入验证码"))
            } else if (value.length !== 4 || !reg.test(value)) {
                callback(new Error("请输入四位数字验证码"))
            } else {
                callback()
            }
        }

        let item1 = {
            color: '#F54F4A'
        };
        let item2 = {
            color: '#FF8C75'
        };
        let item3 = {
            color: '#FFB499'
        };

        let data = [{
            children: [{
                value: 5,
                children: [{
                    value: 1,
                    itemStyle: item1
                }, {
                    value: 2,
                    children: [{
                        value: 1,
                        itemStyle: item2
                    }]
                }, {
                    children: [{
                        value: 1
                    }]
                }],
                itemStyle: item1
            }, {
                value: 10,
                children: [{
                    value: 6,
                    children: [{
                        value: 1,
                        itemStyle: item1
                    }, {
                        value: 1
                    }, {
                        value: 1,
                        itemStyle: item2
                    }, {
                        value: 1
                    }],
                    itemStyle: item3
                }, {
                    value: 2,
                    children: [{
                        value: 1
                    }],
                    itemStyle: item3
                }, {
                    children: [{
                        value: 1,
                        itemStyle: item2
                    }]
                }],
                itemStyle: item1
            }],
            itemStyle: item1
        }, {
            value: 9,
            children: [{
                value: 4,
                children: [{
                    value: 2,
                    itemStyle: item2
                }, {
                    children: [{
                        value: 1,
                        itemStyle: item1
                    }]
                }],
                itemStyle: item1
            }, {
                children: [{
                    value: 3,
                    children: [{
                        value: 1
                    }, {
                        value: 1,
                        itemStyle: item2
                    }]
                }],
                itemStyle: item3
            }],
            itemStyle: item2
        }, {
            value: 7,
            children: [{
                children: [{
                    value: 1,
                    itemStyle: item3
                }, {
                    value: 3,
                    children: [{
                        value: 1,
                        itemStyle: item2
                    }, {
                        value: 1
                    }],
                    itemStyle: item2
                }, {
                    value: 2,
                    children: [{
                        value: 1
                    }, {
                        value: 1,
                        itemStyle: item1
                    }],
                    itemStyle: item1
                }],
                itemStyle: item3
            }],
            itemStyle: item1
        }, {
            children: [{
                value: 6,
                children: [{
                    value: 1,
                    itemStyle: item2
                }, {
                    value: 2,
                    children: [{
                        value: 2,
                        itemStyle: item2
                    }],
                    itemStyle: item1
                }, {
                    value: 1,
                    itemStyle: item3
                }],
                itemStyle: item3
            }, {
                value: 3,
                children: [{
                    value: 1,
                }, {
                    children: [{
                        value: 1,
                        itemStyle: item2
                    }]
                }, {
                    value: 1
                }],
                itemStyle: item3
            }],
            itemStyle: item1
        }];

        return {
            admin:{
                userName: "root",
                pass: "root123"
            },
            form: {
                userName: "",
                pass: "",
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
                    pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/,
                    message: "请输入6-12位数字+字母验证码",
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
            option : {
                series: {
                    radius: ['15%', '80%'],
                    type: 'sunburst',
                    sort: null,
                    highlightPolicy: 'ancestor',
                    data: data,
                    label: {
                        rotate: 'radial'
                    },
                    levels: [],
                    itemStyle: {
                        color: '#ddd',
                        borderWidth: 2
                    }
                }
            }
        }
    },
    mounted() {
        console.log(123);
        let myCharts=echart.init(document.getElementById('backEchart'));
        myCharts.setOption(this.option)
    },
    methods: {
        submitLogin() {
            this.$refs.form.validate((valid) => {
                if (valid) {
                    if(this.form.userName !== this.admin.userName || this.form.pass !== this.admin.pass){
                        this.$message.error("用户名或者密码错误");
                    }else{
                        this.$message.success("登录成功");
                        this.$router.replace('/layout');
                    }
                }
            })
        },
        retrievePass() {
            this.$router.replace('/recover');
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
        .back-echart{
            width:100%;
            height:100%;
        }
    }

</style>
