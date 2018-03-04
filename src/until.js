export function getRedirectPath({type,avatar}) {
    
    let url = (type === 'boss'?'/boss':'/user');
    if(!avatar){
        url += 'info';   
    }
    return url
}