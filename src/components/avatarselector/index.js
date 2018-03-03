import React from 'react';
import { Grid } from 'antd-mobile'

class AvatarSelector extends React.Component {
    constructor (props){
        super(props)
    }

    render(){         
        const avatarList = Array.from(new Array(12)).map((v,i)=>{            
            return {
                icon:require(`./imgs/avatar-${i+1}.jpg`),
                text:`头像${i+1}`
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