import axios from 'axios'
import qs from 'qs'

let baseURL='';
let testURL=0;
// axios 配置
axios.defaults.timeout = 10000;
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
// axios.defaults.baseURL = 'http://dev.api.qiuxiaomi.cn';
axios.defaults.baseURL = 'http://dev.oms-api.qiuxiaomi.cn';
if(process.env.NODE_ENV==='prod'){
    baseURL='https://oms-api.qiuxiaomi.cn'
    testURL=1111
}else if(process.env.NODE_ENV==='test'){
    baseURL='https://oms-api.qiuxiaomi.cn'
    testURL=2222
}else{
    baseURL='http://dev.oms-api.qiuxiaomi.cn'
    testURL=3333
}

let instance=axios.create({
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

export function post(url,params={}){
    return new Promise((resolve,reject)=>{
        instance.post(url,params).then(response=>{
            resolve(response.data)
        },err=>{
            reject(err)
        }).catch((error)=>{
            reject(error)
        })
    })
}
export function postFormdata(url,params){
    let fd=new FormData()
    fd.append('file',files[0])
    let config={
        'headers':{
            'Content-Type': 'multipart/form-data'
        }
    }
    return new Promise((resolve,reject)=>{
        instance.post(url,fd,config).then(response=>{
            resolve(response.data)
        },err=>{
            reject(err)
        }).catch((error)=>{
            reject(error)
        })
    })
}
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
export default {
    instance
}

