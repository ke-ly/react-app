import React,{Component} from "react";
import { List } from "antd-mobile";
import { connect } from "react-redux";
import TabBar from "../components/tabbar";
import PageHead from "../components/menu";
import { showUser } from "../store/auth.redux";

class UserList extends Component{

    componentDidMount = () =>{ 
        this.props.showUser();
    }

    handleTab = (url) => {
        this.props.history.push(url)
    }

    render(){    
        let listItem = ''; 
        if(this.props.users){
            listItem = this.props.users.map((v,i)=>(
                <List.Item 
                thumb={<img src={v.avatar} style={{width:'40px',height:"40px",borderRadius:'3px'}} alt={v.name}/>}
                align='top'
                wrap={true}
                extra={v.date} key={i}>
                    <div>{v.name}</div>
                    <List.Item.Brief>{v.desc}</List.Item.Brief>
                </List.Item>  
            ))
        } else{
            listItem = <div style={{padding:'50px',textAlign:'center'}}>暂无相关数据！</div>
        }       
       
        return(
            <div>
                <PageHead title="用户列表"/>
                <div style={{paddingBottom:'49px'}}>
                    <List>
                        {listItem}                   
                    </List>
                </div>
                <TabBar history={this.props.history}/>
            </div>
        )
    }
}


UserList = connect(
    state=>(
        {users:state.authReducer.payload}
    ),
    {showUser}
)(UserList);

export default UserList;