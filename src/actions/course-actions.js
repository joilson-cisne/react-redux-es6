import * as types from './action-types';

const createCourse = (course) => {
    return {type: types.CREATE_COURSE, course};
};

export {createCourse};
