import React,{Component} from "react";
import { connect } from "react-redux";
import { NavBar, List, InputItem, WhiteSpace, Button } from 'antd-mobile';
import { Redirect } from 'react-router-dom'
import { createForm } from 'rc-form';
import { login } from "../store/auth.redux";



class BasicInput extends React.Component {
    componentDidMount() {
        
    }
    
    render() {       
        const { getFieldProps } = this.props.form;      
        
        return (
            <div>
                <List renderHeader={() => ''}>
                
                    <InputItem
                        {...getFieldProps('phone')}
                        type="phone"
                        placeholder="手机号">
                        手机号码
                    </InputItem>
                    <InputItem
                        {...getFieldProps('password')}
                        type="password"
                        placeholder="密码">
                        密码
                    </InputItem>          
            
                </List>  
                <WhiteSpace />
                <WhiteSpace />
                <div style={{padding:'0 15px'}}>
                    <Button type="primary" onClick={this.props.login}>
                        立即登录  
                    </Button>
                </div>            
            </div>
        );
    }
}
  
const BasicInputExampleWrapper = createForm()(BasicInput);



class Signin extends Component{        
    render(){
        return(
            <div>   
                {this.props.isLog ? <Redirect to="/my"> </Redirect>: null}             
                <NavBar
                    mode="dark" >
                    登录
                </NavBar>
                <BasicInputExampleWrapper login={this.props.login}/>
            </div>
        )
    }
}


const mapStateToProps = (state)=>{    
    return {isLog:state.authReducer.isLog}
}

const actionToProps = {login}


Signin = connect(mapStateToProps,actionToProps)(Signin)

export default Signin;