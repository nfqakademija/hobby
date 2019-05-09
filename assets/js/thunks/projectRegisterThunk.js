import * as actions from '../actions/projectRegisterActions';
import moment from 'moment';
import axios from 'axios';
import uuidv4 from 'uuid'

export const onProjectRegisterFormSubmit = (projectInfo, history, email) => (dispatch) => {

  dispatch(actions.onProjectRegisterFormLoading());
  if(projectInfo.username === '' || projectInfo.hobbyName === '' ||
  projectInfo.description === '' || projectInfo.amount === '' ) {
    return dispatch(actions.onProjectRegisterFormError('Please fill all fields'))
  }
  const formattedDate = moment(projectInfo.endDate).format('YYYY-MM-DD');

  const json = JSON.stringify({
    "title": projectInfo.hobbyName,
    "description": projectInfo.description,
    "amount": projectInfo.amount,
    "email": email,
    "username": projectInfo.username,
  });
  console.log(json);
  axios
      .post('/api/hobby',json)
    .then(res=>{
      dispatch(actions.onProjectRegisterFormSubmit(res));
      history.push('/projects');
    })
    .catch(error => {
      dispatch(actions.onProjectRegisterFormError('Server error. Please try again later.'))
      console.log(error)
    })

}