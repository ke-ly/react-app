import React from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { NavBar, List, InputItem, Button, WingBlank, WhiteSpace, Toast, Radio } from 'antd-mobile'

import { registerAction } from '../../store/user.redux'

const RadioItem = Radio.RadioItem;

@connect(
    state=>state.userReducer,
    {registerAction}
)

class Register extends React.Component {
    constructor (props){
        super(props);

        this.state ={
            userName:'',
            pwd:'',
            type:'boss'
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
        this.handleType = this.handleType.bind(this);
    }


    handleChange(key,val){
        this.setState({
            [key]:val    
        })        
    }

    handleRegister(){        
        this.props.registerAction(this.state); 
    }

    handleType(val){
        this.setState({
            type:val  
        })
    }    

    render(){        
        const identity = [
            {label:"牛人",value:'user'},
            {label:"BOSS",value:'boss'},
        ];
        const type = this.state.type;
        
        return (
            <div className="container-login">      
                {this.props.isAuth?<Redirect to={this.props.RedirectTo}></Redirect>:null}         
                <NavBar mode="dark">注册</NavBar>    
                <div className="form-login">
                    <WhiteSpace size="lg"/>
                    {this.props.msg?<p className="error-box">{this.props.msg}</p>:null}
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
                        <InputItem 
                            type="password"
                            onChange={val=>{this.handleChange("repeatpwd",val)}}
                            placeholder="请重新输入您的密码">
                            重新输入
                        </InputItem>                        
                    </List>
                    <List renderHeader="身份">
                        {
                            identity.map(v=>(
                                <RadioItem 
                                    key={v.label}
                                    checked={type === v.value}
                                    onChange={()=>this.handleType(v.value)}
                                    >
                                    {v.label}
                                </RadioItem>         
                            ))    
                        } 
                    </List>
                    <WhiteSpace size="lg"/>
                    <WingBlank>
                        <Button type="primary" onClick={this.handleRegister}>立即注册</Button>
                    </WingBlank>
                </div>
            </div>
        )
    }
}

export default Register;