import axios from 'axios';
import {removeVote} from '../actions/votesActions'

export const unVote = (voteId) => (dispatch) => {
  axios.delete(`/api/vote/${voteId}`)
      .then(res => {
        dispatch(removeVote(voteId))
      })
      .catch(error => console.log(error))
  return null;
}