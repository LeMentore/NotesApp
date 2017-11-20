import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => (
    <div>
        <Link to="/">Notes</Link>
        <Link to="/messages">Messages</Link>
    </div>
);

export default Menu