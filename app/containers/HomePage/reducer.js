/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { 
    LOGIN_ACTION,LOGIN_SUCCESS_ACTION,SIGNUP_ACTION,SIGNUP_SUCCESS_ACTION,
    API_ERROR,
    SAVE_EMPLOYEES_SUCCESS_ACTION,
    SAVE_EMPLOYEES_ACTION,
    GET_EMPLOYEES_SUCCESS_ACTION,
    GET_EMPLOYEES_ACTION,
    UNAUTHORIZED_ACTION,
    DELETE_SUCCESS_EMPLOYEES_ACTION,
    DELETE_EMPLOYEES_ACTION,
    SAVE_USER_ACTION
 } from './constants';

// The initial state of the App
export const initialState = {
  isFetching: false,
  error:false,
  message:null,
  employees:null,
  isLoggedIn:true,
  userEmail:null
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOGIN_ACTION:
        draft.isFetching = true;
        draft.message = null;
        break;
      case LOGIN_SUCCESS_ACTION:
        draft.isFetching = false;
        draft.isLoggedIn = true;
        draft.userEmail = action.payload.userEmail;
        draft.message = action.payload.msg;
        break;
      case SIGNUP_ACTION:
        draft.isFetching = true;
        draft.message = null;
        break;
      case SIGNUP_SUCCESS_ACTION:
        draft.isFetching = false;
        draft.message = action.payload.msg;
        break;
      case SAVE_EMPLOYEES_ACTION:
        draft.isFetching = true;
        draft.message = null;
        break;
      case SAVE_EMPLOYEES_SUCCESS_ACTION:
        draft.isFetching = false;
        draft.message = action.payload.msg;
        break;
      case DELETE_EMPLOYEES_ACTION:
        draft.isFetching = true;
        draft.message = null;
        break;
      case DELETE_SUCCESS_EMPLOYEES_ACTION:
        draft.isFetching = false;
        draft.message = action.payload.msg;
        break;
      case GET_EMPLOYEES_ACTION:
        draft.isFetching = true;
        draft.message = null;
        break;
      case GET_EMPLOYEES_SUCCESS_ACTION:
        draft.isFetching = false;
        draft.employees = action.payload.employees;
        draft.page = action.payload.page;
        draft.pages = action.payload.pages;
        break;
      case API_ERROR:
        draft.isFetching = false;
        draft.error = true;
        draft.message = "Something went wrong!";
        break;
      case UNAUTHORIZED_ACTION:
        draft.isFetching = false;
        draft.error = true;
        draft.message = "Something went wrong!";
        draft.isLoggedIn = false;
        break;
      case SAVE_USER_ACTION:
        draft.userEmail = action.payload.email;
        draft.message = null;
    }
  });

export default homeReducer;