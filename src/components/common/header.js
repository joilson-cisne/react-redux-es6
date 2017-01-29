import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

import LoadingDots from './loading-dots';

const Header = ({loading}) => {
    return (
        <nav>
            <IndexLink to="/" activeClassName="badge">Home</IndexLink>
            {" | "}
            <Link to="/courses" activeClassName="badge">Courses</Link>
            {" | "}
            <Link to="/about" activeClassName="badge">About</Link>
            {loading && <LoadingDots interval={100} dots={20} />}
        </nav>
    );
};

Header.propTypes = {
    loading: PropTypes.bool.isRequired,
};

export default Header;
