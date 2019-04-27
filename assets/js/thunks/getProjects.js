import {getProjects} from '../actions/projectsAction';
import axios from 'axios'

export const setProjectList = () => (dispatch) => {
  const projectList = axios.get('http://127.0.0.1:8000/api/hobbies')
    .then((res) => dispatch(getProjects(res.data)))
    .catch((error) => console.log(error))
  return projectList;
}