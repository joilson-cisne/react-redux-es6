import * as types from '../actions/action-types';
import initialState from './initial-state';

export default (state = initialState.courses, action) => {
    switch (action.type) {
    case types.LOAD_COURSES_SUCCESS:
        return action.courses;

    default:
        return state;
    }
};
