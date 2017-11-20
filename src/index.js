import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory';
import { Route, Router } from 'react-router-dom';

import NotesApp from 'components/notes/app';
import MessagesApp from 'components/messages';
import AboutPage from 'components/messages/about';
import InboxPage from 'components/messages/inbox';
import Message from 'components/messages/message';
import registerServiceWorker from 'registerServiceWorker';

const history = createHistory();

ReactDOM.render(
    <Router history={history}>
        <div>
            <Route exact path='/' component={NotesApp}/>
            <Route path="/messages" component={MessagesApp}/>
            <Route path="/messages/about" component={AboutPage}/>
            <Route path="/messages/inbox" component={InboxPage}/>
            <Route path="/messages/inbox/all/:messageId" component={Message}/>
        </div>
    </Router>,
    document.getElementById('root')
);
registerServiceWorker();