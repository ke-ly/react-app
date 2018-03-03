import React from 'react';
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { getUserInfo } from '../../store/user.redux.js'

@withRouter
@connect(
    null,
    {getUserInfo}
)
class AuthRouter extends React.Component {

    componentDidMount(){
        const publicList = ['/login','/register'];
        const pathName = this.props.location.pathname;

        if(publicList.includes(pathName)){
            return null;            
        }
                
        axios.get('/user/info')
            .then(res=>{
                if(res.status == 200){
                    if(res.data.code == 0){
                        this.props.getUserInfo(res.data.data)
                    }else{
                        this.props.history.push('/login')
                    }
                }             
            })
    }

    render(){
        return null;
    }
}

export default AuthRouter;
