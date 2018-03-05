import React from 'react'
import { connect } from 'react-redux'
import { WingBlank, WhiteSpace } from 'antd-mobile'

import UserCard from '../../components/usercard'
import { getChatList } from '../../store/chat.redux'

@connect(
    state=>state.chatReducer,
    {getChatList}
)
class BossList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users:[]
        }
    }
    
    componentDidMount(){  
        this.props.getChatList('user')
    }

    render(){        
        return (
            <div className="boss-list">
                <WhiteSpace/>
                <WingBlank>
                    {
                        this.props.users.map(v=>(
                            <div key={v._id}>
                                <UserCard cardInfo={v}/>
                                <WhiteSpace/>
                            </div>
                        ))
                    } 
                </WingBlank>
            </div>
        )
    }
}

export default BossList;