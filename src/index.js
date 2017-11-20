import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory';
import { Route, Router } from 'react-router-dom';

import Layout from 'components/layout';
import registerServiceWorker from 'registerServiceWorker';

const history = createHistory();

ReactDOM.render(
    <Router history={history}>
        <div>
            <Route exact path='/' component={Layout}/>
            <Route path="/messages" component={Layout}/>
        </div>
    </Router>,
    document.getElementById('root')
);
registerServiceWorker();