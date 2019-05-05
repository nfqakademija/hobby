import * as actions from '../actions/registerActions';

export const onRegisterFormSubmit = (user, history) => (dispatch) => {
  dispatch(actions.onFormLoading());
  if(user.username === '' || user.email === '' || user.password === '' || user.password2 === '') {
    return dispatch(actions.onLoginFormError('Please fill fields'));
  }
  if(user.password !== user.password2) {
    return dispatch(actions.onLoginFormError('Passwords doesn\'t match'));
  }
  dispatch(actions.onRegisterFormSuccess(user));
  console.log('Registration');
  console.log(user);
  history.push('/login');

}