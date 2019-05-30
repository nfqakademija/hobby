import * as actions from '../actions/registerActions';
import axios from "axios";
import {setUserToLS} from "../storage/storage";
import {authUser} from "../actions/authActions";

export const onRegisterFormSubmit = (user, history,token) => (dispatch) => {
  dispatch(actions.onFormLoading());
  if(user.email === '' || user.password === '' || user.password2 === '') {
    return dispatch(actions.onRegisterFormError('Please fill fields'));
  }
  if(user.password !== user.password2) {
    return dispatch(actions.onRegisterFormError('Passwords doesn\'t match'));
  }
  if(user.password.length < 6) {
    return dispatch(actions.onRegisterFormError('Password length must be at least 6 character'));
  }
  const registerJson = {
    email: user.email,
    password: user.password,
    registrationToken: token
  };
  axios.post('/api/security/register', registerJson)
      .then(res =>{
        setUserToLS(res.data)
        dispatch(authUser(res.data))
        dispatch(actions.onRegisterFormSuccess(registerJson))
        history.push('/')
      })
      .catch(err => {
            dispatch(actions.onRegisterFormError(err.response.data.errors.children.email.errors ?
                err.response.data.errors.children.email.errors
                : 'Server error. Please try again later.'))
          }
      )

}