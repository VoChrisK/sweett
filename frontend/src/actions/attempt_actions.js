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

export const requestQuestionAttempts = questionId => dispatch => {
    return AttemptsApiUtil.fetchQuestionAttempts(questionId)
        .then(attempts => dispatch(receiveAttempts(attempts.data)))
};

export const requestCategoryAttempts = categoryId => dispatch => {
    return AttemptsApiUtil.fetchCategoryAttempts(categoryId)
        .then(attempts => dispatch(receiveAttempts(attempts.data)))
}

export const requestAttempt = attemptId => dispatch => {
    return AttemptsApiUtil.fetchAttempt(attemptId)
        .then(attempt => dispatch(receiveAttempt(attempt.data)))
};

export const createAttempt = attempt => dispatch => {
    return AttemptsApiUtil.createAttempt(attempt)
        .then(newAttempt => dispatch(receiveAttempt(newAttempt.data)))
};

export const deleteAttempt = attemptId => dispatch => {
    return AttemptsApiUtil.deleteAttempt(attemptId)
        .then(() => dispatch(removeAttempt(attemptId)))
};

export const RECEIVE_ATTEMPTS = "RECEIVE_ATTEMPTS";
export const RECEIVE_ATTEMPT = "RECEIVE_ATTEMPT";
export const REMOVE_ATTEMPT = "REMOVE_ATTEMPT";