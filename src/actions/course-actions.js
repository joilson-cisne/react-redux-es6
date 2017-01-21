import * as types from './action-types';
import CourseApi from '../api/mock-course-api';

const loadCoursesSuccess = (courses) => {
    return {type: types.LOAD_COURSES_SUCCESS, courses};
};

const loadCourses = () => {
    return (dispatch) => {
        return CourseApi.getAllCourses()
            .then( courses => {
                dispatch(loadCoursesSuccess(courses));
            })
            .catch(error => {
                throw(error);
            });
    };
}

export {loadCourses};
