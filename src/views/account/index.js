import React from 'react'
import { connect } from 'react-redux'
import { Card, List, WhiteSpace, WingBlank, Button } from 'antd-mobile'

@connect(
    state=>(
        state.userReducer
    )
)
class Account extends React.Component {
    constructor(props) {
        super(props)
        
    }
    
    
    
    render() {
        
        const {name,avatar='avatar-1'} = this.props;
        return (
            <div>
                <Card full={true}>
                    <Card.Header 
                        title={name}
                        thumb={require(`../../components/avatarselector/imgs/${avatar}.jpg`)}
                        thumbStyle={{width:50,height:50}}>

                    </Card.Header>
                </Card>    
                <WhiteSpace />    
                <List>
                    <List.Item 
                        arrow='horizontal'>
                        身份
                    </List.Item>
                    <List.Item 
                        arrow='horizontal'>
                        简介
                    </List.Item>
                </List>
                <WhiteSpace />  
                <WingBlank>
                    <Button type="primary">
                        退出登录
                    </Button>
                </WingBlank>
            </div>
        )
    }
}

export default Account