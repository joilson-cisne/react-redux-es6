import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

import Header from './common/header';

class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <Header loading={this.props.loading}/>
                {this.props.children}
            </div>
        );
    }
}

// TODO: Teste propTypes inside the class
App.propTypes = {
    children: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state, ownProps) => {
    return {
        loading: state.ajaxCallsInProgress > 0,
    };
};

export default connect(mapStateToProps)(App);
