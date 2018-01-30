import React,{Component} from "react";
import TabBar from "../components/tabbar";
import PageHead from "../components/menu";

class UserList extends Component{
    constructor(props){
        super(props);

        this.state = {
            name:'user'
        }
    }

    handleTab = (url) => {
        this.props.history.push(url)
    }

    render(){
        return(
            <div>
                <PageHead title="用户列表"/>
                <TabBar history={this.props.history}/>
            </div>
        )
    }
}

export default UserList;