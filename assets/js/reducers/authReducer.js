import * as types from '../actions/types';

const initialState = {
    sessionId: '',
    email: '',
    amount: 0,
    isAuth: false
}

export default (state=initialState, action) => {
    switch (action.type) {
        case types.AUTH_USER:
            return {
                ...state,
                sessionId: action.user.sessionId,
                email: action.user.email,
                amount: action.user.amount,
                isAuth: true
            };
        case types.LOG_OUT_USER:
            return {
                ...state,
                sessionId: '',
                email: '',
                amount: 0,
                isAuth: false
            }
        default:
            return state;
    }
}