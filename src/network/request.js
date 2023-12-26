// axios部分

import axios from 'axios'

export function request(config){
    const instance = axios.create({
        baseURL:"http://117.50.163.249:3335",
        timeout:10000
    })
    // 拦截器
    // 请求拦截
    instance.interceptors.request.use(config=>{
        console.log(config)
        // 此处可以进行一些数据操作
        return config
    },err=>{
        console.log(err)
    })
    // 响应拦截
    instance.interceptors.response.use(res=>{
        console.log(res);
        return res.data
    },err=>{
        console.log(err)
    })
    return instance(config)
}