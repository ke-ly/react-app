import React from 'react';
import { Redirect } from 'react-router-dom'
import { NavBar, List, InputItem, TextareaItem, WhiteSpace,Button, WingBlank } from 'antd-mobile'
import { connect } from 'react-redux'

import AvatarSelector from "../../components/avatarselector";
import {updateAction} from "../../store/user.redux";

@connect(
    state=>state.userReducer,
    {updateAction}
)
class UserInfo extends React.Component {
    constructor (props){
        super(props)

        this.state = {
            title:'',
            company:'',
            money:'',
            desc:'',
            avatar:''
        }

        this.handleSave = this.handleSave.bind(this);
        this.changeAvatar = this.changeAvatar.bind(this);
    }

    onChange(key,val){
        this.setState({
            [key]:val
        })
    }

    changeAvatar(i){
        this.setState({
            'avatar':i
        })
    }

    handleSave(){        
        this.props.updateAction(this.state);
    }
    

    render(){
        const pathName = this.props.location.pathname;        
        const RedirectTo = (this.props.RedirectTo&&this.props.RedirectTo!==pathName)?<Redirect to={this.props.RedirectTo}></Redirect>:null;
        
        return (
            <div className="boss-info">    
                {RedirectTo}            
                <NavBar className="fixed-bar">牛人信息完善</NavBar>
                <AvatarSelector 
                    selectAvatar={this.changeAvatar}/>
                <WhiteSpace/>
                <List>
                    <InputItem 
                        placeholder="请输入应聘职位"
                        onChange={item=>this.onChange('title',item)}>
                        应聘职位
                    </InputItem>   
                     
                    <TextareaItem
                        rows={4}
                        title="个人简介"
                        placeholder="请输入个人简介"
                        onChange={item=>this.onChange('desc',item)}>
                    </TextareaItem>
                </List>                    
                <WhiteSpace size="lg"/>
                <WingBlank>
                    <Button type="primary" onClick={this.handleSave}>
                        保存
                    </Button>
                </WingBlank>

            </div>
        )
    }
}

export default UserInfo;