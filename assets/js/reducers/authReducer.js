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
                email: action.user.email,
                amount: action.user.budget,
                isAuth: true
            }
        case types.LOG_OUT:
            return {
                ...state,
                email: '',
                amount: 0,
                isAuth: false
            };
        case types.VOTE_USER:
            return {
                ...state,
                amount: state.amount-action.amount
            }
        default:
            return state;
    }
}
