import * as actions from '../actions/registerActions';
import axios from "axios";

export const onRegisterFormSubmit = (user, history) => (dispatch) => {
  dispatch(actions.onFormLoading());
  if(user.username === '' || user.email === '' || user.password === '' || user.password2 === '') {
    return dispatch(actions.onRegisterFormError('Please fill fields'));
  }
  if(user.password !== user.password2) {
    return dispatch(actions.onRegisterFormError('Passwords doesn\'t match'));
  }
  const registerJson = {
    username: user.username,
    email: user.email,
    password: user.password,
    password2: user.password2
  };

  axios.post('/api/register', registerJson)
      .then(res =>{
        dispatch(actions.onRegisterFormSuccess(registerJson))
        history.push('/login')
      })
      .catch(err => {
            dispatch(actions.onRegisterFormError('Server error. Please try again later.'))

          }
      )

}