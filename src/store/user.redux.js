import axios from 'axios';
import { getRedirectPath } from "../until"

const AUTH_SUCCESS = 'user/auth_success';
const GET_USER_INFO = 'user/getUserInfo';
const ERROR_MSG = 'user/error_msg';

const instState = {
    userName:'',
    pwd:'',
    msg:''
}

export function userReducer(state=instState,action){
    switch (action.type) {
        case GET_USER_INFO:                                           
            return {...state,...action.payload};        
        case AUTH_SUCCESS:                        
            return {...state,RedirectTo:getRedirectPath(action.payload.data),...action.payload,msg:''};    
        case ERROR_MSG:                        
            return {...state,msg:action.msg};    
        default:
            return state;
    }
}

function loginCreator (data){
    return {type:AUTH_SUCCESS,payload:data}
}

function errorMsg(msg){
    return {msg,type:ERROR_MSG}
}

export function getUserInfo(userInfo){
    return {type:GET_USER_INFO,payload:userInfo}
}

export function updateAction(userInfo){
    return dispatch =>{
        axios.post('/user/update',userInfo)
        .then(res=>{
            dispatch({type:AUTH_SUCCESS,payload:res.data})            
        })
    }
    
}

export function loginAction(data){   
    const {userName,pwd} = data;

    if(!userName || !pwd){
        return errorMsg("用户名、密码不能为空")
    }

    return dispatch => {
        axios.post('/user/login',data)
            .then(res=>{
                if(res.status === 200 && res.data.code === 0){
                    return dispatch(loginCreator(res.data))
                }else{
                    dispatch(errorMsg(res.data.msg))    
                }                
            })    
    }
}


export function registerAction(data){ 
    const {userName,pwd,type,repeatpwd} = data;

    if(!userName || !pwd || !type){
        return errorMsg("用户名、密码不能为空")
    }

    if(pwd !== repeatpwd){
        return errorMsg("重新输入的密码必须和密码相同")
    }

    return dispatch=>{
        axios.post('/user/register',data)
            .then(res=>{
                if(res.status === 200 && res.data.code === 0){
                    dispatch({type:AUTH_SUCCESS,payload:res.data})    
                }else{
                    dispatch(errorMsg(res.data.msg))
                }                
            })
    }
}
