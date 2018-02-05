const ADD_USER = 'addUser';
const REMOVE_USER = 'removeUser';

export function counterReducer (state=9,action){
    switch (action.type){
        case ADD_USER:
            return state + 1;
        case REMOVE_USER:
            return state - 1;
        default:
            return state
    }
}

export function addUser (){
    return {type:ADD_USER}
}

export function removeUser (){
    return {type:REMOVE_USER}
}
