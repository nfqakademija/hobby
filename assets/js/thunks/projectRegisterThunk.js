import * as actions from '../actions/projectRegisterActions';
import moment from 'moment';
import axios from 'axios';

export const onProjectRegisterFormSubmit = (projectInfo, history) => (dispatch) => {
  dispatch(actions.onProjectRegisterFormLoading());
  if(projectInfo.username === '' || projectInfo.hobbyName === '' || projectInfo.email === '' ||
  projectInfo.description === '' || projectInfo.amount === '' || projectInfo.endDate === null) {
    return dispatch(actions.onProjectRegisterFormError('Please fill all fields'))
  }
  const formattedDate = moment(projectInfo.endDate).format('YYYY-MM-DD');

  const json = JSON.stringify({
    "title": projectInfo.hobbyName,
    "description": projectInfo.description,
    "amount": projectInfo.amount,
    "email": projectInfo.email,
    "username": projectInfo.username,
    "endDate": formattedDate
  });
  axios.post('https://hobby-api.herokuapp.com/api',json)
    .then(res=>{
      dispatch(actions.onProjectRegisterFormSubmit(res));
      history.push('/');
    })
    .catch(error => dispatch(actions.onProjectRegisterFormError('Server error. Please try again later.')))

}