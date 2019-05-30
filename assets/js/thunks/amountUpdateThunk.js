import axios from 'axios';
import {userAmountUpdate} from '../actions/authActions';
import {updateUserAmountInLs} from '../storage/storage'
export const amountUpdate = () => dispatch => {
  axios.get('/api/user/wallet')
      .then(res => {
        dispatch(userAmountUpdate(res.data.budget))
        updateUserAmountInLs(res.data.budget)

      })
      .catch(err => console.log(err))
}