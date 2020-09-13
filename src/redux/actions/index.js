import * as Types from './types';

export const loginUser = () => {
    return{
        type:Types.LOGIN_USER
    };
};

export const registerUser = obj => {
    return{
        type:Types.REGISTER_USER,
        payload:obj
    }
}

export const createCourse = obj => {
    return {
        type:Types.CREATE_COURSE,
        payload:obj
    }
}