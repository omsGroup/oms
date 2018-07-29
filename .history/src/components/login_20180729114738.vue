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
        window.onload=()=>{

        }
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
        retrievePass() {
            this.$router.replace('/recover');
        },
        init() {
            renderer = new THREE.WebGLRenderer({
                antialias: true,
                alpha: true
            });
            renderer.setPixelRatio((window.devicePixelRatio) ? window.devicePixelRatio : 1);
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.autoClear = false;
            renderer.setClearColor(0x000000, 0.0);
            document.getElementById('canvas').appendChild(renderer.domElement);

            scene = new THREE.Scene();

            camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
            camera.position.z = 400;
            scene.add(camera);

            circle = new THREE.Object3D();
            particle = new THREE.Object3D();
            halo = new THREE.Object3D();
            luminor = new THREE.Object3D();
            
            scene.add(circle);
            scene.add(particle);
            scene.add(halo);
            scene.add(luminor);

            let geometry = new THREE.TetrahedronGeometry(1, 1);
            let geo_planet = new THREE.SphereGeometry(10, 64, 32);
            let geom3 = new THREE.SphereGeometry(16, 32, 16);
            let geo_star = new THREE.SphereGeometry(90, 64, 64); 
            
            let material = new THREE.MeshPhongMaterial({
                color: 0x111111,
                shading: THREE.FlatShading
            });

            for (let i = 0; i < 500; i++) {
                let mesh = new THREE.Mesh(geometry, material);
                mesh.position.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize();
                mesh.position.multiplyScalar( 200 + (Math.random() * 500));
                mesh.rotation.set(Math.random() * 2, Math.random() * 2, Math.random() * 2);
                particle.add(mesh);
            }
            
            let mat = new THREE.MeshPhongMaterial({
                color: 0xcea3a3,
                emissive: 0x000000,
                //shading: THREE.FlatShading,
                shading : THREE.SmoothShading,
                map: THREE.ImageUtils.loadTexture('img/Generic_Celestia_asteroid_texture.jpg'),
                bumpMap: THREE.ImageUtils.loadTexture('img/Generic_Celestia_asteroid_texture.jpg'),
                bumpScale:   0.025,
                specularMap: THREE.ImageUtils.loadTexture('img/Generic_Celestia_asteroid_texture.jpg'),
                specular: new THREE.Color('grey')
            });
            
            let mat3 = new THREE.ShaderMaterial({
                uniforms: {},
                vertexShader: document.getElementById('vertexShader').textContent,
                fragmentShader: document.getElementById('fragmentShader').textContent,
                side: THREE.BackSide,
                blending: THREE.AdditiveBlending,
                transparent: true
            });

            let planet = new THREE.Mesh(geo_planet, mat);
            planet.scale.x = planet.scale.y = planet.scale.z = 15;
            circle.add(planet);

            let ball = new THREE.Mesh(geom3, mat3);
            ball.scale.x = ball.scale.y = ball.scale.z = 16;
            halo.add(ball);
            
            let ball2 = new THREE.Mesh(geom3, mat3);
            ball2.scale.x = ball2.scale.y = ball2.scale.z = 12;
            ball2.position.set(25,5,1)
            halo.add(ball2);
            
            let ambientLight = new THREE.AmbientLight(0x000000);
            scene.add(ambientLight);
            
            let hemiLight = new THREE.HemisphereLight(0x000000, 0x1111111, 20);
                    hemiLight.position.set(-1, -1, 2);
            luminor.add(hemiLight);
            
            lights[1] = new THREE.DirectionalLight(0x000000, 7);
            lights[1].position.set(-1, 0, 0.5);
            lights[2] = new THREE.DirectionalLight(0x000000, 7);
            lights[2].position.set(1, 0, 0.5);

            scene.add(lights[1]);
            scene.add(lights[2]);
            
            window.addEventListener('resize', onWindowResize, false);

        },
        onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        },
        
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
