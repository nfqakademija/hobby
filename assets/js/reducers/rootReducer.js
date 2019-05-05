import {combineReducers} from  'redux';
import loginReducer from './loginReducer';
import registerReducer from './registerReducer';
import projectRegisterReducer from './projectRegisterReducer';
import projectsReducer from './projectsReducer';

const rootReducer = combineReducers({
  login: loginReducer,
  register: registerReducer,
  projectRegister: projectRegisterReducer,
  projects: projectsReducer
})

export default rootReducer;
