import axios from 'axios';
import {setProjectList} from './getProjects';
import {changeUserAmountInLS} from '../storage/storage'
import {voteUser} from '../actions/authActions';

export const onVote = (projectId, amount) => (dispatch) => {
  axios.post('/api/vote', {
    hobby: projectId,
    amount: amount
  }).then(res=>{
    changeUserAmountInLS(amount);
    dispatch(setProjectList());
    dispatch(voteUser(amount));
  }).catch(err=> console.log(err))

  return null;
}