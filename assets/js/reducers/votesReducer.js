import * as types from '../actions/types';

const initialState = {
  votes: []
}

export default (state =initialState, action) => {
  switch (action.type) {
    case types.GET_VOTES:
      return {...state, votes: action.votes}
    case types.REMOVE_VOTE:
      const votes = state.votes.filter(vote => vote.id !== action.voteID)
      return {...state, votes}
    default:
      return state;
  }
}