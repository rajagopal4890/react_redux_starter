import * as types from '../actions/actionTypes';
import initialState from './initialState';

function actionTypeEndsInSuccess(actionType) {
  return actionType.substring(actionType.length - 8) === '_SUCCESS' ;
}
export default function loadingReducer(state=initialState.apiCalls, action) {
  if (action.type === types.API_CALL_STARTED) {
   return state + 1;
  }
  else if (action.type === 'API_CALL_FAIL' || actionTypeEndsInSuccess(action.type)) {
    return state - 1;
  }
  return state;
}
