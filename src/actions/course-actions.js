import * as types from './action-types';
import CourseApi from '../api/mock-course-api';

const loadCoursesSuccess = (courses) => {
    return {type: types.LOAD_COURSES_SUCCESS, courses};
};

const createCourseSuccess = (course) => {
    return {type: types.CREATE_COURSE_SUCCESS, course};
};

const updateCourseSuccess = (course) => {
    return {type: types.UPDATE_COURSE_SUCCESS, course};
};

const loadCourses = () => {
    return (dispatch) => {
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
        return CourseApi.saveCourse(course)
            .then(savedCourse => {
                course.id
                    ? dispatch(updateCourseSuccess(savedCourse))
                    : dispatch(createCourseSuccess(savedCourse));
            })
            .catch(error => {
                throw(error);
            });
    };
}

export {loadCourses, saveCourse};
