import React,{Component} from "react";
import { NavBar, Icon, List, InputItem, WhiteSpace, Button } from 'antd-mobile';
import {Link} from 'react-router-dom';
import { createForm } from 'rc-form';



class BasicInput extends React.Component {
    componentDidMount() {
        
    }
    handleClick = () => {
      this.customFocusInst.focus();
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
                        <Link to='/list'>立即登录</Link>
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
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => console.log('onLeftClick')} >
                    登录
                </NavBar>
                <BasicInputExampleWrapper/>
            </div>
        )
    }
}

export default Signin;