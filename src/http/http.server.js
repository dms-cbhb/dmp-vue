const qs = require('qs')
const axios = require('axios')

//请求拦截器
axios.interceptors.request.use((config)=>{
    config.headers.Authorization=JSON.stringify({
        token:sessionStorage.token,
        uid:sessionStorage.uid
    })
    return config
})
//响应拦截器
axios.interceptors.response.use(data=>{
    return data;
},err=>{
    let str=err.toString();
    if(str.indexOf("401")>=0){
        window.location.href="http://localhost:3000/login"
    }else if(str.indexOf("403")>=0){
        window.history.back(-1)
    }
})

export let login = (data,parmas)=>{
   return axios({
       method:'post',
       url:`${parmas}`,
       data:qs.stringify(data)
   })
}