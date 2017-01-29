import * as types from './action-types';
import CourseApi from '../api/mock-course-api';
import {beginAjaxCall, ajaxCallError} from './ajax-status-actions';

const loadCoursesSuccess = (courses) => {
    return {type: types.LOAD_COURSES_SUCCESS, courses};
};

const createCourseSuccess = (course) => {
    return {type: types.CREATE_COURSE_SUCCESS, course};
};

const updateCourseSuccess = (course) => {
    return {type: types.UPDATE_COURSE_SUCCESS, course};
};

// thunks
const loadCourses = () => {
    return (dispatch) => {
        dispatch(beginAjaxCall());

        return CourseApi.getAllCourses()
            .then(courses => {
                dispatch(loadCoursesSuccess(courses));
            })
            .catch(error => {
                throw(error);
            });
    };
}

const saveCourse = (course) => {
    return (dispatch, getState) => {
        dispatch(beginAjaxCall());

        return CourseApi.saveCourse(course)
            .then(savedCourse => {
                course.id
                    ? dispatch(updateCourseSuccess(savedCourse))
                    : dispatch(createCourseSuccess(savedCourse));
            })
            .catch(error => {
                dispatch(ajaxCallError());
                throw(error);
            });
    };
}

export {loadCourses, saveCourse};
