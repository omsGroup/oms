import axios from 'axios'
import qs from 'qs'

// axios 配置
axios.defaults.timeout = 10000;
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
axios.defaults.baseURL = `http://${process.env.NODE_ENV}.oms-api.qiuxiaomi.cn`;
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
    if(res.status === 200){
        if(res.data.errorCode===1){
            return Promise.resolve(res.data)
        }else{
            this.$message.error(res.data.msg)
        }
    }else if(res.status === 500){
        this.$message.error('服务器异常')
    }
    return res;
}, (error) => {
    //404等问题可以在这里处理
    return Promise.reject(error);
});

export function fetch(url, params) {
    return new Promise((resolve, reject) => {
        axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
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
};
export function postFormat(url,params){
    return new Promise((resolve,reject)=>{
        axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
        instance.post(url,params)
            .then((response) => {
                resolve(response);
            }).catch((error) => {
                console.log(error,'error')
                reject(error)
            })
    })
};
export function formData(url,param={}){
    return instance.post(url,param,{
        headers: {
            'enctype': 'multipart/form-data',
            'Cache-Control': 'no-store',
            'Pragma': 'no-cache'
        },
        data: param || {},
        transformRequest:[function() {
            let fd = new FormData();
            for (let i in param) {
                if (param.hasOwnProperty(i)) {
                    fd.append(i, param[i]);
                }
            }
            return fd;
        }]
    })
}
export default {
    formData,
    fetch,
    postFormat,
    instance
}

