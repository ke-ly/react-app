import React, { Component } from 'react'
import {WhiteSpace, Card} from 'antd-mobile'
import propTypes from 'prop-types';

class UserCard extends Component {

    static propTypes = {
        cardInfo: propTypes.object.isRequired   
    }

    render() {
        const Header = Card.Header;
        const Body = Card.Body;
        const v = this.props.cardInfo;
        
        return (
            <div>
               <Card>
                    <Header 
                        title={v.name}
                        thumb={require(`../../components/avatarselector/imgs/${v.avatar}.jpg`)}
                        thumbStyle={{width:30,height:30}}
                        extra={v.title}>
                    </Header>
                    <Body>
                        {v.money?(<div><div>薪资：{v.money}</div><WhiteSpace /></div>):null}
                        {v.company?(<div><div>公司：{v.company}</div><WhiteSpace /></div>):null}                                        
                        <div>{v.desc}</div>
                    </Body>
                </Card> 
                <WhiteSpace/>
            </div>
        )
    }
}

export default UserCard;