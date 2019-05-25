import * as actions from '../actions/authActions';
import {removeUserFromLS} from '../storage/storage'
import axios from 'axios';

export const onLogOut = (history) => (dispatch) => {
  axios.get('/api/security/logout')
      .then(res => {
        removeUserFromLS()
        dispatch(actions.logout())
        history.push('/');
      })
      .catch(err => console.log(err))
  return null;
}