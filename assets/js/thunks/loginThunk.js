import * as actions from '../actions/loginActions';
import {authUser} from '../actions/authActions';
import axios from 'axios';

export const onFormSubmit = (user, history) => (dispatch) => {
  dispatch(actions.onFormLoading());
  if(user.email === '' || user.password === '' ) {
    return dispatch(actions.onLoginFormError('Please fill fields'));
  }
  const loginJson = 	{
      "security": {
          "credentials": {
              "username": user.email,
              "password": user.password
          }
      }
  }
  axios.post('/api/security/login', loginJson)
      .then(res =>{
        dispatch(authUser(res.data))
        dispatch(actions.onLoginFormSuccess(user))
        history.push('/')
      })
      .catch(err => {
        dispatch(actions.onLoginFormError('Server error. Please try again later.'))

          }
      )
}