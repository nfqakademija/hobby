import * as actions from '../actions/authActions';
import axios from 'axios';

export const onLogOut = () => (dispatch) => {
    axios.get('/api/security/logout')
        .then(res=> {
            console.log(res)
            dispatch(actions.logout())
        })
        .catch(err => console.log(err))
    return null;
}