import React from 'react';

class Tests extends React.Component {
    render (){
        const {store,addUser,removeUser} = this.props;                
        return (
            <div>
                <h1>{store.getState()}</h1>
                <button type="button" onClick={()=>store.dispatch(addUser())}>添加</button>
                <button type="button" onClick={()=>store.dispatch(removeUser())}>移除</button>
            </div>
        )
    }
}

export default Tests;