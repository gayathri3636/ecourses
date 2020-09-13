import * as Types from '../actions/types';
import { registerUser } from '../actions';

const initialUserObj = {
    signUpList:[],
    result:{},
    registeredDetails:{},
    user:{
        email:"",
    }
}

const handleLoginSuccess = (state, action) => {
    let newState = {...state};
    if(action.result !== undefined){
        newState = Object.assign({}, state, {
            signUpList:Object.assign([], action.result)
        })
    }
    return {...newState};
}

const handleLoginError = (state, action) => {
    let newState = {...state};
    return {...newState};
}

const registerNewUser = (state, action) => {
    let newState = {...state}
    if(action.payload !== undefined){
        newState = Object.assign({}, state, {
            registeredDetails:Object.assign([], action.payload)
        })
    }
    return {...newState};
}

const registerUserSuccess = (state, action) => {
    let newState = {...state};
    return {...newState}
}

const registerUserError = (state, action) => {
    let newState = {...state}
    return {...newState}
}

export default(state = initialUserObj, action) => {
    switch(action.type){
        case Types.LOGIN_USER:
            return state;
        case Types.LOGIN_USER_SERVER_RESPONSE_SUCCESS:
            return handleLoginSuccess(state, action);
        case Types.LOGIN_USER_SERVER_RESPONSE_ERROR:
            return handleLoginError(state, action);
        case Types.REGISTER_USER:
            return registerNewUser(state, action);
        case Types.REGISTER_USER_SUCCESS:
            return registerUserSuccess(state, action);
        case Types.REGISTER_USER_ERROR:
            return registerUserError(state, action);
        default:
            return state;
    }
}