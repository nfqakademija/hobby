import * as actions from '../actions/loginActions';
import {authUser} from '../actions/authActions';
import axios from 'axios';
import {setUserToLS} from '../storage/storage';

export const onFormSubmit = (user, history) => (dispatch) => {
  dispatch(actions.onFormLoading());
  if(user.email === '' || user.password === '' ) {
    return dispatch(actions.onLoginFormError('Please fill fields'));
  }
  const loginJson = 	{
      "security": {
          "credentials": {
              "email": user.email,
              "password": user.password
          }
      }
  }
  axios.post('/api/security/login', loginJson)
      .then(res =>{
        setUserToLS(res.data)
        dispatch(authUser(res.data))
        dispatch(actions.onLoginFormSuccess(user))
        history.push('/')
      })
      .catch(err => {
        dispatch(actions.onLoginFormError(err.response.data.error ? err.response.data.error : 'Server error. Please try again later.'))

          }
      )
}