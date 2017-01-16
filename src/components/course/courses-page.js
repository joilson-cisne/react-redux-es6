import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

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
        this.props.actions.createCourse(this.state.course)
    }

    CourseRow(course, index) {
        return (<div key={index}>{course.title}</div>);
    }

    render() {
        return (
            <div>
                <h1>Courses</h1>
                {this.props.courses.map(this.CourseRow)}
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

CoursesPage.propTypes = {
    actions: PropTypes.object.isRequired,
    courses: PropTypes.array.isRequired,
};

const mapStateToProps = (state, ownProps) => {
    return {
        courses: state.courses,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(courseActions, dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
