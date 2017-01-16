import * as types from '../actions/action-types';

export default (state = [], action) => {
    switch (action.type) {
    case types.CREATE_COURSE:
        return [
            ...state,
            Object.assign({}, action.course),
        ];

    default:
        return state;
    }
};
