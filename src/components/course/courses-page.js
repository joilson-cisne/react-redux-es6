import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';

import * as courseActions from '../../actions/course-actions';
import CourseList from './course-list';

class CoursesPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    }

    redirectToAddCoursePage() {
        browserHistory.push('/course');
    }

    render() {
        const {courses} = this.props;

        return (
            <div>
                <h1>Courses</h1>
                <input
                    type="submit"
                    value="Add Course"
                    className="btn btn-primary"
                    onClick={this.redirectToAddCoursePage} />
                <CourseList courses={courses} />
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
