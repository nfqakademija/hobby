import * as types from './types';

export function onInputChange(e) {
  return {
    type: types.PROJECT_REGISTER_FORM_INPUT_CHANGE,
    name: e.target.name,
    value: e.target.value
  }
}

export function onDateChange(date) {
  return {
    type: types.PROJECT_REGISTER_DATE_CHANGE,
    date
  }
}

export function onProjectRegisterFormLoading() {
  return {
    type: types.PROJECT_REGISTER_FORM_LOADING
  }
}

export function onProjectRegisterFormError(error) {
  return {
    type: types.PROJECT_REGISTER_FORM_ERROR,
    error
  }
}

export function onProjectRegisterFormSubmit(projectInfo) {
  return {
    type: types.PROJECT_REGISTER_FORM_SUCCESS,
    projectInfo
  }
}