import axios from 'axios';
import {removeVote} from '../actions/votesActions';
import {unVoteUser} from '../actions/authActions';

export const unVote = (voteId, amount) => (dispatch) => {
  axios.delete(`/api/vote/${voteId}`)
      .then(res => {
        dispatch(removeVote(voteId));
        dispatch(unVoteUser(amount))
      })
      .catch(error => console.log(error))
  return null;
}