import {combineReducers} from  'redux';
import loginReducer from './loginReducer';
import registerReducer from './registerReducer';
import projectRegisterReducer from './projectRegisterReducer';
import projectsReducer from './projectsReducer';
import authReducer from './authReducer';
import votesReducer from './votesReducer';

const rootReducer = combineReducers({
  login: loginReducer,
  register: registerReducer,
  projectRegister: projectRegisterReducer,
  projects: projectsReducer,
  auth: authReducer,
  votes: votesReducer
})

export default rootReducer;
