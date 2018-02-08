import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import registerServiceWorker from './registerServiceWorker';

import Signin from './views/signin';
import My from "./views/my";
import User from "./views/userlist";
import Boss from "./views/bosslist";
import reducer from './store/reducer';
import './config'
import "./style.css";

const store = createStore(reducer,compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path='/' component={Signin}/>
                <Route path="/sign" component={Signin} />    
                <Route path="/my" component={My} />
                <Route path="/user" component={User} />
                <Route path="/boss" component={Boss} />
            </Switch>
        </Router>
    </Provider>, 
    document.getElementById('root'));


registerServiceWorker();
