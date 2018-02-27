import * as types from './actionTypes';
import authorApi from '../mockApi/mockAuthorApi';
import {apiCallStart} from "./loadingAction";

export function loadAuthorsSuccess(authors) {
  return {type: types.LOAD_AUTHORS_SUCCESS, authors};
}

export function loadAuthors() {
  return function (dispatch) {
    dispatch(apiCallStart());
    return authorApi.getAllAuthors().then(authors => {
        dispatch(loadAuthorsSuccess(authors));
      }
    ).catch(error => {throw(error);});
  };
}
