import axios from "axios";
import { Toast } from 'antd-mobile';

//添加一个请求拦截器
axios.interceptors.request.use(function(config){    
    Toast.loading('加载中...',0)
    return config;
},function(error){
    //当出现请求错误是做一些事
    return Promise.reject(error);
});

//添加一个返回拦截器
axios.interceptors.response.use(function(response){
    
    setTimeout(()=>{
        Toast.hide();        
    },300)
    //对返回的数据进行一些处理
    return {...response,config:"拦截器修改了"};
},function(error){
    //对返回的错误进行一些处理
    return Promise.reject(error);
});