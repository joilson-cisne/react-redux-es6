import React from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/course-actions';

class CoursesPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            course: {title: ''},
        };

        this.OnTitleChange = this.OnTitleChange.bind(this);
        this.OnClickSave = this.OnClickSave.bind(this);
    }


    OnTitleChange(event) {
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({course: course});
    }

    OnClickSave(event) {
        // Because the second parameter mapDispatchToPros was ommited in `connect()`,
        // dispatch will be automatically injected in this component props
        this.props.dispatch(courseActions.createCourse(this.state.course)) // eslint-disable-line react/prop-types
    }

    render() {
        return (
            <div>
                <h1>Courses</h1>
                <h2>Add Courses</h2>
                <input
                    type="text"
                    onChange={this.OnTitleChange}
                    value={this.state.course.title}/>
                <input
                    type="submit"
                    onClick={this.OnClickSave}
                    value="save"/>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        courses: state.courses,
    };
};

export default connect(mapStateToProps)(CoursesPage);
