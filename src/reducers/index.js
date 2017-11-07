import {combineReducers} from 'redux';
import authors from './authorReducer';
import courses from './courseReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  authors: authors,
  courses: courses,
  ajaxCallsInProgress: ajaxCallsInProgress
});

export default rootReducer;
