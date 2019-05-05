import * as actions from '../actions/loginActions';
import axios from 'axios';

export const onFormSubmit = (user, history) => (dispatch) => {
  dispatch(actions.onFormLoading());
  if(user.email === '' || user.password === '' ) {
    return dispatch(actions.onLoginFormError('Please fill fields'));
  }
  const loginJson = {
    email: user.email,
    password: user.password
  }
  axios.post('/api/login', loginJson)
      .then(res =>{
        dispatch(actions.onLoginFormSuccess(loginJson))
        history.push('/')
      })
      .catch(err => {
        dispatch(actions.onLoginFormError('Server error. Please try again later.'))

          }
      )
}