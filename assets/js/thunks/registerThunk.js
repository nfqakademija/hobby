import * as actions from '../actions/registerActions';
import axios from "axios";
import {setUserToLS} from "../storage/storage";
import {authUser} from "../actions/authActions";

export const onRegisterFormSubmit = (user, history) => (dispatch) => {
  dispatch(actions.onFormLoading());
  if(user.username === '' || user.email === '' || user.password === '' || user.password2 === '') {
    return dispatch(actions.onRegisterFormError('Please fill fields'));
  }
  if(user.password !== user.password2) {
    return dispatch(actions.onRegisterFormError('Passwords doesn\'t match'));
  }

  if(user.password.length < 6) {
    return dispatch(actions.onRegisterFormError('Password must be at least 6 characters'))
  }
  const registerJson = {
    email: user.email,
    password: user.password,
  };

  axios.post('/api/security/register', registerJson)
      .then(res =>{
        setUserToLS(res.data)
        dispatch(authUser(res.data))
        dispatch(actions.onRegisterFormSuccess(registerJson))
        history.push('/')
      })
      .catch(err => {
        console.log(err.response)
        dispatch(actions.onRegisterFormError(
            err.response.data.errors.children.email ? 'This email is already used' : 'Server error. Please try again later'
        ))

          }
      )

}