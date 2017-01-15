import React from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () => {
    return (
        <nav>
            <IndexLink to="/" activeClassName="badge">Home</IndexLink>
            {" | "}
            <Link to="/courses" activeClassName="badge">Courses</Link>
            {" | "}
            <Link to="/about" activeClassName="badge">About</Link>
        </nav>
    );
};

export default Header;
