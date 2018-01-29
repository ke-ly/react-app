import React,{Component} from "react";
import { NavBar, Icon } from 'antd-mobile';

class Signin extends Component{
    constructor(props){
        super(props);   

    }

    render(){
        return(
            <div>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => console.log('onLeftClick')} >
                    登录
                </NavBar>

            </div>
        )
    }
}

export default Signin;