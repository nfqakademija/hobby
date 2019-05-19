import * as types from './types';

export function getVotes(votes) {
  return {
    type: types.GET_VOTES,
    votes
  }
}

export function removeVote(voteID) {
  return {
    type: types.REMOVE_VOTE,
    voteID
  }
}