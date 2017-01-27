import AuthorApi from '../api/mock-author-api';
import * as types from './action-types';

const loadAuthorsSuccess = (authors) => {
    return {type: types.LOAD_AUTHORS_SUCCESS, authors};
}

const loadAuthors = () => {
    return (dispatch) => {
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
