import React from 'react'
import {NavBar, TabBar} from 'antd-mobile'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import BossList from '../../views/bosslist'

class Dashboard extends React.Component {

    render(){
        const iconImg = 'https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg'
        return (
            <div className="dashboard">
                <NavBar>
                    header
                </NavBar>  
                <BrowserRouter>
                    <Switch>
                        <Route path="/boss" component={BossList}></Route>  
                    </Switch>    
                </BrowserRouter>
                <TabBar>
                    <TabBar.Item
                        title="牛人"
                        key="user"
                        icon={
                            <div style={{width:22,height:22,background:`url(${iconImg}) center center /  21px 21px no-repeat`}}></div>
                        }>
                    </TabBar.Item>
                    <TabBar.Item
                        title="BOSS"
                        key="boss"
                        icon={
                            <div style={{width:22,height:22,background:`url(${iconImg}) center center /  21px 21px no-repeat`}}></div>
                        }>
                    </TabBar.Item>
                    <TabBar.Item
                        title="我的"
                        key="my"
                        icon={
                            <div style={{width:22,height:22,background:`url(${iconImg}) center center /  21px 21px no-repeat`}}></div>
                        }>
                    </TabBar.Item>
                </TabBar>
            </div>
        )
    }
}

export default Dashboard;