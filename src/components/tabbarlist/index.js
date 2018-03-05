import React from 'react'
import { withRouter } from 'react-router-dom'
import { TabBar } from 'antd-mobile';
import PropTypes from 'prop-types';

@withRouter
class TabBarList extends React.Component {
    static propTypes = {
        navData:PropTypes.array.isRequired
    }    
    render() {
        
        const pathname = this.props.location.pathname;
        const tabItem = this.props.navData.filter(d=>(!d.hide)).map(v=>{            
            return (
                <TabBar.Item
                    key={v.path}
                    title={v.text}
                    icon={{uri:require(`./imgs/${v.icon}.png`)}}
                    selectedIcon={{uri:require(`./imgs/${v.icon}-active.png`)}}
                    selected = {v.path === pathname}
                    badge={0}
                    data-path={v.path}
                    onPress={()=>this.props.history.push(v.path)}
                    >                    
                </TabBar.Item>       
            )
        })
        return (
            <div className="fixed-bottom">
                <TabBar>
                    {tabItem}
                </TabBar>
            </div>
        )
    }
}
export default TabBarList;
