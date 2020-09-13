import {
    takeEvery,
    call,
    put,
    select,
    take,
    fork,
    all,
    takeLatest
  } from "redux-saga/effects";
  import * as Types from "../actions/types";
import { GetDataFromServer } from "../service";

  function* fetchLoginUser(action){
      try{
          const baseUrl = "";
          const reqMethod = "";
          const response = yield call(GetDataFromServer, baseUrl, reqMethod, "");
          const result = yield response.json();
          if(result.error){
              yield put({
                  type:Types.LOGIN_USER_SERVER_RESPONSE_ERROR,
                  error:result.error
              });
          } else{
              yield put({
                  type:Types.LOGIN_USER_SERVER_RESPONSE_SUCCESS,
                  result
              })
          }
      } catch(error){
          console.log(error)
      }
  }

  function* registerNewUser(action){
      try{
          const baseUrl="";
          const formBody = action.payload;
          const reqMethod = "POST"
          const response = yield call(
              GetDataFromServer,
              baseUrl,
              reqMethod,
              formBody
          );
          const result = yield response.json();
          if(result.error){
              yield put({
                  type:Types.REGISTER_USER_ERROR,
                  error:result.error
              })
          } else{
              yield put({
                  type:Types.REGISTER_USER_SUCCESS,
                  result
              })
          } 
      } catch(error) {
          console.log(error)
      }
  }

  function* createCourse(action) {
      try{
          reqMethod = "POST"
          const baseUrl = "";
          let formBody = action.payload;
            const response = yield call(
                GetDataFromServer,
                baseUrl,
                reqMethod,
                formBody
            );
            const result = yield response.json();
            if(result.error){
                yield put({
                    type:Types.CREATE_COURSE_SERVER_RESPONSE_ERROR,
                    error:result.error
                })
            } else{
                yield put({
                    type:Types.CREATE_COURSE_SERVER_RESPONSE_SUCCESS,
                    result
                })
            }
      }
      catch(error){
          console.log(error)
      }
  }