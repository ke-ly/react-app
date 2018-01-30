import React,{Component} from "react";
import { TabBar } from "antd-mobile";

class PageTabBar extends Component{ 

    handleTab = (url) => {
        this.props.history.push(url)
    }

    render(){
        return(
            <div style={{position:'fixed',bottom:0,width:'100%'}}>
                <TabBar >       
                    <TabBar.Item 
                        title="老板" 
                        key="boss" 
                        icon={<div style={{width:'22px',height:'22px',background:'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat'}}></div>}
                        onPress={this.handleTab.bind(this,'boss')}>
                    </TabBar.Item >
                    <TabBar.Item 
                        title="牛人" 
                        key="user" 
                        icon={<div style={{width:'22px',height:'22px',background:'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat'}}></div>}
                        onPress={this.handleTab.bind(this,'user')}>
                    </TabBar.Item >
                    <TabBar.Item 
                        title="我的" 
                        key="my" 
                        icon={<div style={{width:'22px',height:'22px',background:'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat'}}></div>}
                        onPress={this.handleTab.bind(this,'my')}>
                    </TabBar.Item >
                </TabBar>
            </div>
        )
    }
}

export default PageTabBar;