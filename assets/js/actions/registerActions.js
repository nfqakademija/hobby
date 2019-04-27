import * as types from './types.js';

export function onInputChange(e) {
  return {
    type: types.REGISTER_FORM_INPUT_CHANGE,
    name: e.target.name,
    value: e.target.value
  }
}

export function onFormLoading() {
  return {
    type: types.REGISTER_FORM_LOADING
  }
}

export function onLoginFormError(error) {
  return {
    type: types.REGISTER_FORM_ERROR,
    error
  }
}

export function onRegisterFormSuccess(user) {
  return {
    type:types.REGISTER_FORM_SUCCESS,
    user
  }
}