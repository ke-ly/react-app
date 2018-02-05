import React,{Component} from "react";
import { connect } from "react-redux";
import { NavBar, List, InputItem, WhiteSpace, Button } from 'antd-mobile';
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
                    <Button type="primary">
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
        console.log(this.props);
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


const maps = (state)=>{    
    return {sss:state.authReducer.isLog}
}

const ac = {login}


Signin = connect(maps,ac)(Signin)

export default Signin;