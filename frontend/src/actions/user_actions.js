import * as UserApiUtil from './../util/users_util';

const receiveUser = user => {
    return({
        type: RECEIVE_USER,
        user
    })
};

export const updateUser = user => dispatch => {
    return UserApiUtil.updateUser(user)
    .then(user => dispatch(receiveUser(user.data)))
};

export const RECEIVE_USER = "RECEIVE_USER";