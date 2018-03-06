import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { NavBar } from 'antd-mobile'

import BossList from '../../views/bosslist'
import UserList from '../../views/userlist'
import Account from '../../views/account'
import TabBarList from '../tabbarlist'


function Msg(){
    return <h1>消息页面</h1>
}
// function Account(){
//     return <h1>Account</h1>
// }
@connect(
    state=>state.userReducer
)
class Dashboard extends React.Component {

    constructor(props) {
        super(props)
        
        this.state = {
            userType:''    
        }
    }   

    componentDidMount(){       
        
    }

    render(){        
        const pathname = this.props.location.pathname;
        
        const dashList = [
            {
                path:'/boss',
                title:'牛人列表',
                text:'牛人',
                icon:'boss',
                component:BossList,
                hide:this.props.type === 'user'
            },
            {
                path:'/user',
                title:'BOSS列表',
                text:'老板',
                icon:'job',
                component:UserList,
                hide:this.props.type === 'boss'
            },
            {
                path:'/msg',
                title:'消息中心',
                text:'消息',
                icon:'msg',
                component:Msg
            },
            {
                path:'/me',
                title:'个人中心',
                text:'我的',
                icon:'user',
                component:Account
            },
        ]
        
        return (
            <div className="dashboard">
                <NavBar className="fixed-bar">
                    {dashList.find(v=>(v.path===pathname)).title}
                </NavBar>  
                <Switch>
                    {
                        dashList.map(v=>(
                            <Route key={v.path} path={v.path} component={v.component}></Route>
                        )) 
                    }
                </Switch>   

                <TabBarList navData={dashList}/>
            </div>
        )
    }
}

export default Dashboard;