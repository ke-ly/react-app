import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router,Route,HashHistory} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import Signin from './views/signin';
import PageList from "./views/List";
ReactDOM.render(
    <Router history={HashHistory}>
        <div>
            <Route path="/sign" component={Signin} />
            <Route path="/list" component={PageList} />
        </div>
    </Router>, 
    document.getElementById('root'));
registerServiceWorker();
