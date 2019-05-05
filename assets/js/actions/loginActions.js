import * as types from './types.js';

export function onInputChange(e) {
  return {
    type: types.LOGIN_FORM_INPUT_CHANGE,
    name: e.target.name,
    value: e.target.value
  }
}

export function onFormLoading() {
  return {
    type: types.LOGIN_FORM_LOADING
  }
}

export function onLoginFormError(error) {
  return {
    type: types.LOGIN_FORM_ERROR,
    error
  }
}

export function onLoginFormSuccess(user) {
  return {
    type:types.LOGIN_FORM_SUCCESS,
    user
  }
}