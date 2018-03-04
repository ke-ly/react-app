import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import AuthRouter from './components/authrouter/authrouter'

import Login from './views/login'
import Register from './views/register'
import Bossinfo from './views/bossinfo'
import UserInfo from './views/userinfo'
import Dashboard from './components/dashboard'


function App(){
    return (
        <BrowserRouter>
            <div>
                <AuthRouter />
                <Switch>
                    <Route exact path="/" component={Login}></Route>
                    <Route exact path="/login" component={Login}></Route>
                    <Route exact path="/register" component={Register}></Route>
                    <Route exact path="/bossinfo" component={Bossinfo}></Route>
                    <Route exact path="/userinfo" component={UserInfo}></Route>
                    <Route exact path="/userinfo" component={UserInfo}></Route>
                    <Route exact component={Dashboard}></Route>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App;
