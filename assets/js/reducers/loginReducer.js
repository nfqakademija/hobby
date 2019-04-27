import * as types from '../actions/types';

const initialState = {
  email: '',
  password: '',
  error: '',
  loading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_FORM_INPUT_CHANGE:
      return {...state, [action.name]: action.value};
    case types.LOGIN_FORM_LOADING:
      return {...state, loading: true};
    case types.LOGIN_FORM_ERROR:
      return {...state, error: action.error, loading:false};
    case types.LOGIN_FORM_SUCCESS:
      return {...state, email: '', password: '', loading:false};
    default:
      return state;
  }
}