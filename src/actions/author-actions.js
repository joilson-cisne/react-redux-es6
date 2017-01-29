import AuthorApi from '../api/mock-author-api';
import * as types from './action-types';
import {beginAjaxCall} from './ajax-status-actions';

const loadAuthorsSuccess = (authors) => {
    return {type: types.LOAD_AUTHORS_SUCCESS, authors};
}

// thunks
const loadAuthors = () => {
    return (dispatch) => {
        dispatch(beginAjaxCall());

        return AuthorApi.getAllAuthors()
            .then(authors => {
                dispatch(loadAuthorsSuccess(authors));
            })
            .catch(error => {
                throw(error);
            });
    };
};

export {loadAuthors};
