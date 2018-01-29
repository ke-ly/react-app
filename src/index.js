import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Signin from './views/signin';

ReactDOM.render(<Signin />, document.getElementById('root'));
registerServiceWorker();
