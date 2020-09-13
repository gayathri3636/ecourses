import * as Types from '../actions/types';
import { act } from 'react-dom/test-utils';

const initalState = {
    post_course: [],
}

const createCourseSuccess = (state, action) => {
    let newState = {...state};
    if(action.result !== undefined){
        newState = Object.assign({}, state, {
            post_course:Object.assign([], action.result)
        })
    }
    return {...newState}
}

const createCourseError = (state, action) => {
    let newState = {...state};
    return newState;
}

export default (state = initalState, action) => {
    switch(action.type){
        case Types.CREATE_COURSE:
            return {post_course: [...state.post_course.concat(action.payload)]}
        case Types.CREATE_COURSE_SERVER_RESPONSE_ERROR:
            return createCourseError(state);
        case Types.CREATE_COURSE_SERVER_RESPONSE_SUCCESS:
            return createCourseSuccess(state, action);
    }
}