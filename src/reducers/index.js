import {combineReducers} from 'redux';
import courses from "./courseReducer";
import authors from "./authorReducer";
import apiCalls from "./loadingReducer";

const rootReducer = combineReducers({
  courses,
  authors,
  apiCalls
});
export default rootReducer;

