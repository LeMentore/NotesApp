import React from 'react';
import { Link } from 'react-router-dom';
import Menu from 'components/menu';

import InboxPage from 'components/messages/inbox'
import 'styles/MessagesApp.less';

const MessagesApp = ({ match }) => (
    <div>
        <Menu />
        <div className='App'>
            <div className='menu-bar'>
                <div className='menu-item'>
                    <Link className='menu-item-link' to='/messages/about'>About</Link>
                </div>

                <div className='menu-item'>
                    <Link className='menu-item-link' to='/messages/inbox'>Inbox</Link>
                </div>
            </div>

            <div className='content'>
                {console.log(match)}
            </div>
        </div>
    </div>
);

export default MessagesApp