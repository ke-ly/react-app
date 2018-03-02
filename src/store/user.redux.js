import axios from 'axios';

const LOGIN_SUCCESS = 'user/login_success';
const REGISTER_SUCCESS = 'user/register_success';
const ERROR_MSG = 'user/error_msg';

const instState = {
    userName:'',
    pwd:'',
    isAuth:false,
    msg:''
}

export function userReducer(state=instState,action){
    switch (action.type) {
        case REGISTER_SUCCESS:                                   
            return {...state,isAuth:true,...action.payload};    
        case LOGIN_SUCCESS:                        
            return {...state,isAuth:true,...action.payload,msg:''};    
        case ERROR_MSG:                        
            return {...state,msg:action.msg};    
        default:
            return state;
    }
    return state;
}

function loginCreator (data){
    return {type:LOGIN_SUCCESS,payload:data}
}

function errorMsg(msg){
    return {msg,type:ERROR_MSG}
}

export function loginAction(data){   
    const {userName,pwd} = data;

    if(!userName || !pwd){
        return errorMsg("用户名、密码不能为空")
    }

    return dispatch => {
        axios.post('/user/login',data)
            .then(res=>{
                if(res.status == 200 && res.data.code == 0){
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
                if(res.status == 200 && res.data.code == 0){
                    dispatch({type:REGISTER_SUCCESS,payload:res.data})    
                }else{
                    dispatch(errorMsg(res.data.msg))
                }                
            })
    }
}
