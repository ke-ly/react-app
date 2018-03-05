import axios from 'axios';

const GET_CHAT_LIST = 'chat/getChatList'

const initState = {
    users:[]
}

export function chatReducer(state=initState,action){
    switch (action.type) {
        case GET_CHAT_LIST:
            
            return {...state,users:action.payload};
    
        default:
            return state;
    }
}

export function getChatList(type){
    return dispatch => {
        axios.get(`/user/list?type=${type}`)
            .then(res=>{
                dispatch({type:GET_CHAT_LIST,payload:res.data.data}) 
            })    
    }
}