import React from 'react';
import { Link } from 'react-router-dom';
import Menu from 'components/menu';

import 'styles/MessagesApp.less';

const MessagesApp = () => (
    <div>
        <Menu />,
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
                {this.props.children}
            </div>
        </div>
    </div>
);

export default MessagesApp