import {
  DELETE_EMPLOYEES_ACTION,
  GET_EMPLOYEES_ACTION,
  LOGIN_ACTION,
  SAVE_EMPLOYEES_ACTION,
  SAVE_USER_ACTION,
  SIGNUP_ACTION,
  UNAUTHORIZED_ACTION,
} from './constants';

export const loginAction = (email, password) => ({
  type: LOGIN_ACTION,
  payload: JSON.stringify({
    email,
    password,
  }),
});
export const signupAction = (email, password) => ({
  type: SIGNUP_ACTION,
  payload: JSON.stringify({
    email,
    password,
  }),
});

export const saveEmployeesAction = employeesList => ({
  type: SAVE_EMPLOYEES_ACTION,
  payload: JSON.stringify({ employeesList }),
});
export const getEmployeesAction = page => ({
  type: GET_EMPLOYEES_ACTION,
  payload: { page },
});
export const deleteEmployeesAction = () => ({
  type: DELETE_EMPLOYEES_ACTION,
});
export const unauthorizedAction = () => ({
  type: UNAUTHORIZED_ACTION,
});
export const saveUserAction = email => ({
  type: SAVE_USER_ACTION,
  payload: { email },
});
