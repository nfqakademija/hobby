import * as types from '../actions/types';

const initialState = {
    email: '',
    amount: 0,
    isAuth: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.AUTH_USER:
            return {
                ...state,
                email: action.user.username,
                isAuth: true
            }
        default:
            return state;
    }
}