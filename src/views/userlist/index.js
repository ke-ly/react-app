import React from 'react'
import { connect } from 'react-redux'
import {WingBlank, WhiteSpace} from 'antd-mobile'

import UserCard from '../../components/usercard'
import { getChatList } from '../../store/chat.redux'

@connect(
    state=>state.chatReducer,
    {getChatList}
)
class UserList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users:[]
        }
    }
    
    componentDidMount(){
        this.props.getChatList('boss')   
    }

    render(){        
        return (
            <div className="boss-list">
                <WhiteSpace/>
                <WingBlank>
                    {
                        this.props.users.map(v=>(
                            v.avatar?
                            <div key={v._id}>
                                <UserCard cardInfo={v}/>
                                <WhiteSpace/>
                            </div>:
                            null
                        ))
                    } 
                </WingBlank>
            </div>
        )
    }
}

export default UserList;