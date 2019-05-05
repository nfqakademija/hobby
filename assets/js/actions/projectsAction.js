import * as types from './types';

export function getProjects(projects) {
  return {
    type: types.GET_PROJECTS,
    projects
  }
}