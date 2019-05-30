import * as actions from '../actions/projectRegisterActions';
import axios from 'axios';

export const onProjectRegisterFormSubmit = (projectInfo, history, email) => (dispatch) => {

  dispatch(actions.onProjectRegisterFormLoading());
  if(projectInfo.hobbyName === '' ||
  projectInfo.description === '' || projectInfo.amount === '' ) {
    return dispatch(actions.onProjectRegisterFormError('Please fill all fields'))
  }

  const json = JSON.stringify({
    "title": projectInfo.hobbyName,
    "description": projectInfo.description,
    "amount": projectInfo.amount,
    "email": email
  });
  axios
      .post('/api/hobby',json)
    .then(res=>{
      dispatch(actions.onProjectRegisterFormSubmit(res));
      history.push('/projects');
    })
    .catch(error => {
      dispatch(actions.onProjectRegisterFormError('Server error. Please try again later.'))
    })

}