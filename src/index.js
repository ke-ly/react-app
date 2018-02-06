import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import registerServiceWorker from './registerServiceWorker';

import Signin from './views/signin';
import My from "./views/my";
import reducer from './store/reducer';
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
            </Switch>
        </Router>
    </Provider>, 
    document.getElementById('root'));


registerServiceWorker();
