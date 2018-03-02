import React from 'react';
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { NavBar, List, InputItem, Button, WingBlank, WhiteSpace, Toast } from 'antd-mobile'

import { loginAction } from '../../store/user.redux'

@connect(
    state=>state.userReducer,
    {loginAction}
)

class Login extends React.Component {
    constructor (props){
        super(props);

        this.state ={
            userName:'',
            pwd:'',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleChange(key,val){
        this.setState({
            [key]:val    
        })        
    }

    handleLogin(){
        this.props.loginAction(this.state)      
    }

    render(){
        
        return (
            <div className="container-login">
                 {this.props.isAuth?<Redirect to={this.props.RedirectTo}></Redirect>:null}
                <NavBar mode="dark">登录</NavBar>    
                <div className="form-login">
                    <WhiteSpace size="lg"/>
                    <List>
                        <InputItem 
                            type="text"
                            onChange={val=>{this.handleChange("userName",val)}}
                            placeholder="请输入您的用户名">
                            用户名
                        </InputItem>
                        <InputItem 
                            type="password"
                            onChange={val=>{this.handleChange("pwd",val)}}
                            placeholder="请输入您的密码">
                            密码
                        </InputItem>
                    </List>
                    <WhiteSpace size="lg"/>
                    <WingBlank>
                        <div style={{textAlign:'right'}}>
                            没有账号？
                            <Link to="/register" style={{color:'#108ee9'}}>去注册</Link>
                        </div>
                    </WingBlank>
                    <WhiteSpace/>  
                    <WingBlank>                        
                        <Button type="primary" onClick={this.handleLogin}>立即登录</Button>
                    </WingBlank>
                </div>
            </div>
        )
    }
}

export default Login;