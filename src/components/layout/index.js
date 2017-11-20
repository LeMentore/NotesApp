import React from 'react';
import { Link } from 'react-router-dom';

import NotesApp from 'components/notes/app';

const Layout = () => (
    <div>
        <div>
            <NotesApp />
        </div>
        <div>
            <Link to="/">Notes</Link>
            <Link to="/messages">Messages</Link>
        </div>
    </div>
);

export default Layout