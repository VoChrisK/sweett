import * as AttemptsApiUtil from './../util/attempts_util';

const receiveAttempts = attempts => {
    return ({
        type: RECEIVE_ATTEMPTS,
        attempts
    });
};

const receiveAttempt = attempt => {
    return ({
        type: RECEIVE_ATTEMPT,
        attempt
    });
};

const removeAttempt = attemptId => {
    return ({
        type: REMOVE_ATTEMPT,
        attemptId
    });
}

export const requestAttempts = questionId => dispatch => {
    return AttemptsApiUtil.fetchAttempts(questionId)
        .then(attempts => dispatch(receiveAttempts(attempts)))
};

export const requestAttempt = attemptId => dispatch => {
    return AttemptsApiUtil.fetchAttempt(attemptId)
        .then(attempt => dispatch(receiveAttempt(attempt)))
};

export const createAttempt = attempt => dispatch => {
    return AttemptsApiUtil.createAttempt(attempt)
        .then(newAttempt => dispatch(receiveAttempt(newAttempt)))
};

export const deleteAttempt = attemptId => dispatch => {
    return AttemptsApiUtil.deleteAttempt(attemptId)
        .then(() => dispatch(removeGoal(attemptId)))
};

export const RECEIVE_ATTEMPTS = "RECEIVE_ATTEMPTS";
export const RECEIVE_ATTEMPT = "RECEIVE_ATTEMPT";
export const REMOVE_ATTEMPT = "REMOVE_ATTEMPT";