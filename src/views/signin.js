import React,{Component} from "react";
import { NavBar, List, InputItem, WhiteSpace, Button } from 'antd-mobile';
import { createForm } from 'rc-form';



class BasicInput extends React.Component {
    componentDidMount() {
        
    }
    handleLogin = (e) => {
        e.preventDefault();
        
        this.props.history.push('/boss'); //路由跳转
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
                    <Button type="primary" onClick={this.handleLogin}>
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
                <NavBar
                    mode="dark" >
                    登录
                </NavBar>
                <BasicInputExampleWrapper history = {this.props.history}/>
            </div>
        )
    }
}

export default Signin;