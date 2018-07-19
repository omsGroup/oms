import axios from 'axios'
import qs from 'qs'

// axios 配置
axios.defaults.timeout = 10000;
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
axios.defaults.baseURL = `http://${process.env.NODE_ENV}.api.qiuxiaomi.cn`;
// // 或者
// switch(process.env.NODE_ENV) {
//     case 'dev':
//         axios.defaults.baseURL = 'http://dev.api.qiuxiaomi.cn';
//         break;
//     case 'production':
//         axios.defaults.baseURL = 'http://[pro].api.qiuxiaomi.cn';
//         break;
// }
// axios.defaults.baseURL = 'http://production.api.qiuxiaomi.cn/ranking/live_ranking_lis';
let instance = axios.create({
    headers:{
        
    },
    data:{
        
    },
    params:{
        
    }
})
//POST传参序列化                         
instance.interceptors.request.use((config) => {
    if(config.method  === 'post'){
        config.data = qs.stringify(config.data);
    }
    return config;
},(error) =>{
    return Promise.reject(error);
});

//返回状态判断
instance.interceptors.response.use((res) =>{
    if(!res.data.success){
        return Promise.reject(res);
    }
    return res;
}, (error) => {
    //404等问题可以在这里处理
    return Promise.reject(error);
});

export function fetch(url, params) {
    return new Promise((resolve, reject) => {
        instance.post(url, params)
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err);
            })
            .catch((error) => {
                reject(error)
            })
    })
}
export default axios

