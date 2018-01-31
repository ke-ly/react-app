import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,HashHistory} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import Signin from './views/signin';
import BossList from "./views/bosslist";
import UserList from "./views/userlist";
import My from "./views/my";
ReactDOM.render(
    <Router history={HashHistory}>
        <div>
            <Route exact path='/' component={Signin}/>
            <Route path="/sign" component={Signin} />            
            <Route path="/boss" component={BossList} />
            <Route path="/user" component={UserList} />
            <Route path="/my" component={My} />
        </div>
    </Router>, 
    document.getElementById('root'));
registerServiceWorker();
