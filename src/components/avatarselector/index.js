import React from 'react';
import { Grid } from 'antd-mobile'
import PropTypes from 'prop-types'

class AvatarSelector extends React.Component {
    static propType = {
        selectAvatar:PropTypes.func.isRequired
    } 

    render(){         
        const avatarList = Array.from(new Array(12)).map((v,i)=>{            
            return {
                icon:require(`./imgs/avatar-${i+1}.jpg`),
                text:`avatar-${i+1}`
            }
        });        
        return (
            <div className="avatar-selector">
                <Grid 
                    data={avatarList} 
                    onClick = {item=>this.props.selectAvatar(item.text)}
                    />
            </div>
        )
    }
}

export default AvatarSelector;