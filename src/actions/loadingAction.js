import * as types from './actionTypes';

export function apiCallStart() {
  return {type: types.API_CALL_STARTED};
}

export function apiCallFail() {
  return {type: types.API_CALL_FAIL};
}
