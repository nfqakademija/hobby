import {getVotes} from '../actions/votesActions';
import axios from 'axios';

export const votes = () => (dispatch) => {
  axios.get('/api/user/votes')
      .then(res => {
        dispatch(getVotes(res.data))
      })
      .catch(error => console.log(error))
  return null;
}