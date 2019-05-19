import * as actions from '../actions/authActions';
import {removeUserFromLS} from '../storage/storage'
import axios from 'axios';

export const onLogOut = () => (dispatch) => {
    console.log('LOGOUT')
    axios.get('/api/security/logout')
        .then(res=> {
            removeUserFromLS()
            dispatch(actions.logout())
        })
        .catch(err => console.log(err))
    return null;
}