import * as actions from '../actions/loginActions';

export const onFormSubmit = (user, history) => (dispatch) => {
  dispatch(actions.onFormLoading());
  if(user.email === '' || user.password === '' ) {
    return dispatch(actions.onLoginFormError('Please fill fields'));
  }
  dispatch(actions.onLoginFormSuccess(user));
  const json = {
    email: user.email,
    password: user.password
  }
  console.log(json);
  // history.push('/');
}