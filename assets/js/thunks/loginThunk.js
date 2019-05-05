import * as loginActions from '../actions/loginActions';
import * as actions from '../actions/authActions';
import axios from 'axios';

export const onFormSubmit = (user, history) => (dispatch) => {
  dispatch(loginActions.onFormLoading());
  if(user.email === '' || user.password === '' ) {
    return dispatch(loginActions.onLoginFormError('Please fill fields'));
  }
  const loginJson = {
      "security": {
          "credentials": {
              "username": user.email,
              "password": user.password
          }
      }
  }
  console.log(loginJson)
  axios.post('/api/security/login', loginJson)
      .then(res =>{
        dispatch(actions.authUser(loginJson))
        history.push('/')
      })
      .catch(err => {
        dispatch(loginActions.onLoginFormError('Server error. Please try again later.'))

          }
      )
}