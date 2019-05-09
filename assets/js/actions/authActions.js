import * as types from './types';

export function authUser(user) {
    return {
        type: types.AUTH_USER,
        user
    }
}

export function logout() {
    return {
        type: types.LOG_OUT
    }
}

export function voteUser(amount) {
    return {
        type: types.VOTE_USER,
        amount
    }
}