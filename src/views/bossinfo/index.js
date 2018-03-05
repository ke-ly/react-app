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
class BossInfo extends React.Component {
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
                <NavBar className="fixed-bar">BOSS信息完善</NavBar>
                <AvatarSelector 
                    selectAvatar={this.changeAvatar}/>
                <WhiteSpace/>
                <List>
                    <InputItem 
                        placeholder="请输入招聘职位"
                        onChange={item=>this.onChange('title',item)}>
                        招聘职位
                    </InputItem>    
                    <InputItem 
                        placeholder="请输入公司名称"
                        onChange={item=>this.onChange('company',item)}>
                        公司名称
                    </InputItem>    
                    <InputItem 
                        placeholder="请输入职位薪资"
                        onChange={item=>this.onChange('money',item)}>
                        职位薪资
                    </InputItem>    
                    <TextareaItem
                        rows={4}
                        title="职位要求"
                        placeholder="请输入职位要求"
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

export default BossInfo;