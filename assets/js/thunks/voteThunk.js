import axios from 'axios';
import {setProjectList} from './getProjects';
import {voteUser} from '../actions/authActions';

export const onVote = (projectId, amount) => (dispatch) => {
  axios.post('/api/vote', {
    hobby: projectId,
    amount: amount
  }).then(res=>{
    dispatch(setProjectList());
    dispatch(voteUser(amount));
  }).catch(err=> console.log(err))

  return null;
}