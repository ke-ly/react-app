import axios from "axios";



const LOGIN = 'login';
const LOGOUT = 'logout';
const SHOW = 'showUser';
const initState = {
    isLog:false,user:"kkerwin"
}
export function authReducer(state=initState,action){    
    
    switch (action.type){
        case LOGIN:
            return {...state,isLog:true}
        case LOGOUT:
            return {...state,isLog:false}
        case SHOW:                                     
            return {...state,payload:action.payload}
        default :
            return state
    }
}

export const login = () => (
    {type:LOGIN}
)
export const logout = () => (
    {type:LOGOUT}
)
export const showUser = () => {
    return dispatch => {
        axios.get('/data').then((res)=>{  
            dispatch({type:SHOW,payload:res.data})
        }) 
    }
}
    