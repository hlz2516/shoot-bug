import axios from 'axios';

const requests = axios.create({
    baseURL:'api',
    timeout:5000
})

//请求拦截器，在发送请求前做一些事情
requests.interceptors.request.use((config)=>{
    return config
})

//响应拦截器，在响应发送过来后做一些事情
requests.interceptors.response.use((res)=>{
    //成功的回调函数
    return res.data
},(err)=>{
    return Promise.reject(new Error('服务器似乎出现了一些问题'))
})

export default requests