import React,{Component} from "react";
import { Button } from "antd-mobile";
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom'
import TabBar from "../components/tabbar";
import PageHead from "../components/menu";
import { logout } from '../store/auth.redux';



class My extends Component{   

    render(){
        console.log(this.props);
        
        const mypage = (
            <div>
                <PageHead title="个人中心"/>
                <div style={{height:'400px'}}></div>
                <div style={{padding:'0 20px'}}>
                    <Button type="primary" onClick={this.props.logout}>退出登录</Button>
                </div>
                <TabBar history={this.props.history}/>
            </div>
        );

        const outt = <Redirect to='/sign'></Redirect>

        return this.props.isLog ? mypage : outt;
    }
}

My = connect(
    state=>(
        {isLog:state.authReducer.isLog}
    ),
    {logout}
)(My)

export default My;