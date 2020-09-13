import {combineReducers} from 'redux';
import login from './login';
import course_post from './course_post';

export default combineReducers({
    login,
    course_post
})