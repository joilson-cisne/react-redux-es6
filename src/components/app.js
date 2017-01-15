import React, {PropTypes} from 'react';
import Header from './common/header';

class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <Header/>
                {this.props.children}
            </div>
        );
    }
}

// TODO: Teste propTypes inside the class
App.propTypes = {
    children: PropTypes.object.isRequired,
};

export default App;
