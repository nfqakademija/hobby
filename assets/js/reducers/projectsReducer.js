import * as types from '../actions/types';

const initialState = {
  projects: []
}

export default (state=initialState, action) => {
  switch (action.type) {
    case types.GET_PROJECTS:
      return {...state, projects: action.projects}
    default:
      return state;
  }
}