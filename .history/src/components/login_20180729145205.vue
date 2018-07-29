<template>
    <div id="canvas" 
         class="login-pages flex-center-center">
        <script id="vertexShader" 
                type="x-shader/x-vertex">
            varying vec3 vNormal; void main() { vNormal = normalize( normalMatrix * normal ); gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 ); }
        </script>
        <script id="fragmentShader" 
                type="x-shader/x-vertex">
            varying vec3 vNormal; void main() { float intensity = pow( 0.7 - dot( vNormal, vec3( 0.0, 0.0, 0.5 ) ), 4.0 ); gl_FragColor = vec4( 1.3, 1.0, 1.0, 1.0 ) * intensity; }
        </script>
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
import * as TWO from 'two'

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
            this.renderer = new THREE.WebGLRenderer({
                antialias: true,
                alpha: true
            });
            this.renderer.setPixelRatio((window.devicePixelRatio) ? window.devicePixelRatio : 1);
            this.renderer.setSize(window.innerWidth, window.innerHeight);
            this.renderer.autoClear = false;
            this.renderer.setClearColor(0x000000, 0.0);
            document.getElementById('canvas').appendChild(this.renderer.domElement);

            this.scene = new THREE.Scene();

            this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
            this.camera.position.z = 400;
            this.scene.add(this.camera);

            this.circle = new THREE.Object3D();
            this.particle = new THREE.Object3D();
            this.halo = new THREE.Object3D();
            this.luminor = new THREE.Object3D();
            
            this.scene.add(this.circle);
            this.scene.add(this.particle);
            this.scene.add(this.halo);
            this.scene.add(this.luminor);

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
                this.particle.add(mesh);
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
                vertexShader: document.getElementById('vertexShader')?document.getElementById('vertexShader').textContent:'',
                fragmentShader: document.getElementById('fragmentShader')?document.getElementById('fragmentShader').textContent:'',
                side: THREE.BackSide,
                blending: THREE.AdditiveBlending,
                transparent: true
            });

            let planet = new THREE.Mesh(geo_planet, mat);
            planet.scale.x = planet.scale.y = planet.scale.z = 15;
            this.circle.add(planet);

            let ball = new THREE.Mesh(geom3, mat3);
            ball.scale.x = ball.scale.y = ball.scale.z = 16;
            this.halo.add(ball);
            
            let ball2 = new THREE.Mesh(geom3, mat3);
            ball2.scale.x = ball2.scale.y = ball2.scale.z = 12;
            ball2.position.set(25,5,1)
            this.halo.add(ball2);
            
            let ambientLight = new THREE.AmbientLight(0x000000);
            this.scene.add(ambientLight);
            
            let hemiLight = new THREE.HemisphereLight(0x000000, 0x1111111, 20);
            hemiLight.position.set(-1, -1, 2);
            this.luminor.add(hemiLight);
            
            this.lights[1] = new THREE.DirectionalLight(0x000000, 7);
            this.lights[1].position.set(-1, 0, 0.5);
            this.lights[2] = new THREE.DirectionalLight(0x000000, 7);
            this.lights[2].position.set(1, 0, 0.5);

            this.scene.add(this.lights[1]);
            this.scene.add(this.lights[2]);
            
            window.addEventListener('resize', this.onWindowResize, false);

        },
        onWindowResize() {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
        },
        animate() {
            let timer = 0.0001 * Date.now();
            requestAnimationFrame(this.animate);

            this.particle.rotation.x += 0.0000;
            this.particle.rotation.y -= 0.0040;
            this.circle.rotation.x -= 0.001;
            this.circle.rotation.y -= 0.001;
            
            this.halo.rotation.z -= 0.005;
            this.luminor.rotation.z -= 0.005;
            //halo.scale.x = Math.sin( timer * 3) * 0.09 + 1;
            //halo.scale.y = Math.sin( timer * 7 ) * 0.09 + 1;
            
            this.renderer.clear();
            this.renderer.render(this.scene, this.camera)
        }
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
