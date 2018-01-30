import React,{Component} from "react";
import TabBar from "../components/tabbar";
import PageHead from "../components/menu";

class BossList extends Component{
    constructor(props){
        super(props);

        this.state = {
            name:'bosslist'
        }
    }

    render(){
        return(
            <div>
                <PageHead title="老板列表"/>
                <TabBar history={this.props.history}/>
            </div>
        )
    }
}

export default BossList;