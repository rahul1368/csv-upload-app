import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import {
  API_ERROR,
  DELETE_EMPLOYEES_ACTION,
  DELETE_SUCCESS_EMPLOYEES_ACTION,
  GET_EMPLOYEES_ACTION,
  GET_EMPLOYEES_SUCCESS_ACTION,
  LOGIN_ACTION,
  LOGIN_SUCCESS_ACTION,
  SAVE_EMPLOYEES_ACTION,
  SAVE_EMPLOYEES_SUCCESS_ACTION,
  SIGNUP_ACTION,
  SIGNUP_SUCCESS_ACTION,
  UNAUTHORIZED_ACTION,
} from './constants';

export function* userLogin(action) {
  try {
    const requestURL = `/api/authenticate`;
    const { payload } = action;
    const response = yield call(request, requestURL, {
      method: 'POST',
      body: payload,
    });
    if (response.status === 401) {
      yield put({ type: UNAUTHORIZED_ACTION });
    } else if (response.status === 200) {
      yield put({ type: LOGIN_SUCCESS_ACTION, payload: response });
    }
  } catch (err) {
    yield put({ type: API_ERROR });
  }
}

function* userSignUp(action) {
  try {
    const requestURL = `/api/register`;
    const { payload } = action;
    const response = yield call(request, requestURL, {
      method: 'POST',
      body: payload,
    });
    if (response.status === 401) {
      yield put({ type: UNAUTHORIZED_ACTION });
    } else if (response.status === 200) {
      yield put({ type: SIGNUP_SUCCESS_ACTION, payload: response });
    }
  } catch (e) {
    yield put({ type: API_ERROR });
  }
}

function* saveEmployees(action) {
  try {
    const requestURL = `/api/save-employees-data`;
    const { payload } = action;
    const response = yield call(request, requestURL, {
      method: 'POST',
      body: payload,
    });
    if (response.status === 401) {
      yield put({ type: UNAUTHORIZED_ACTION });
    } else if (response.status === 200) {
      yield put({ type: SAVE_EMPLOYEES_SUCCESS_ACTION, payload: response });
    }
  } catch (e) {
    yield put({ type: API_ERROR });
  }
}
function* getEmployees(action) {
  try {
    const requestURL = `/api/get-employees-data/${action.payload.page}`;
    const response = yield call(request, requestURL, { method: 'GET' });
    if (response.status === 401) {
      yield put({ type: UNAUTHORIZED_ACTION });
    } else if (response.success === true) {
      yield put({ type: GET_EMPLOYEES_SUCCESS_ACTION, payload: response });
    }
  } catch (e) {
    yield put({ type: API_ERROR });
  }
}
function* deleteEmployees(action) {
  try {
    const requestURL = `/api/delete-employees-data`;
    const response = yield call(request, requestURL, { method: 'GET' });
    if (response.status === 401) {
      yield put({ type: UNAUTHORIZED_ACTION });
    } else if (response.status === 200) {
      yield put({ type: DELETE_SUCCESS_EMPLOYEES_ACTION, payload: response });
    }
  } catch (err) {
    yield put({ type: API_ERROR });
  }
}
/**
 * Root saga manages watcher lifecycle
 */
export default function* root() {
  yield takeLatest(LOGIN_ACTION, userLogin);
  yield takeLatest(SIGNUP_ACTION, userSignUp);
  yield takeLatest(SAVE_EMPLOYEES_ACTION, saveEmployees);
  yield takeLatest(GET_EMPLOYEES_ACTION, getEmployees);
  yield takeLatest(DELETE_EMPLOYEES_ACTION, deleteEmployees);
}
