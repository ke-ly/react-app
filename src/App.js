import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom'

import Login from './views/login'
import Register from './views/register'



function Test (p){
    console.log(p);
    
    return (
        <h1>test</h1>
    )
}

function App(){
    return (
        <BrowserRouter>
            <div>
                <Route exact path="/" component={Login}></Route>
                <Route exact path="/login" component={Login}></Route>
                <Route exact path="/register" component={Register}></Route>
            </div>
        </BrowserRouter>
    )
}

export default App;
