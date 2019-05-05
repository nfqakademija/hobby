import * as types from './types';

export function authUser(user) {
    return {
        type: types.AUTH_USER,
        user
    }
}

export function logOutUser() {
    return {
        type: types.LOG_OUT_USER
    }
}