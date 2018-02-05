import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,HashHistory, Switch} from 'react-router-dom';
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import registerServiceWorker from './registerServiceWorker';

import Signin from './views/signin';
import My from "./views/my";
import reducer from './store/reducer';

const store = createStore(reducer,compose(
    applyMiddleware(thunk)
));

ReactDOM.render(
    <Provider store={store}>
        <Router history={HashHistory}>
            <Switch>
                <Route exact path='/' component={Signin}/>
                <Route path="/sign" component={Signin} />    
                <Route path="/my" component={My} />
            </Switch>
        </Router>
    </Provider>, 
    document.getElementById('root'));


registerServiceWorker();
