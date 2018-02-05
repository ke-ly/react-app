const LOGIN = 'login';
const LOGOUT = 'logout';

export function authReducer(state={isLog:false,user:"kkerwin"},action){    
    
    switch (action.type){
        case LOGIN:
            return {...state,isLog:true}
        case LOGOUT:
            return {...state,isLog:false}
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