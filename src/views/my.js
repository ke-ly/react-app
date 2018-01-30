import React,{Component} from "react";
import TabBar from "../components/tabbar";
import PageHead from "../components/menu";

class My extends Component{
    constructor(props){
        super(props);

        this.state = {
            name:'my'
        }
    }

    render(){
        return(
            <div>
                <PageHead title="个人中心"/>
                <TabBar history={this.props.history}/>
            </div>
        )
    }
}

export default My;