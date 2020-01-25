import { RECEIVE_ATTEMPTS, RECEIVE_ATTEMPT, REMOVE_ATTEMPT } from './../actions/attempt_actions';

const attemptsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState;
    switch (action.type) {
        case RECEIVE_ATTEMPTS:
            return Object.assign({}, action.attempts);
        case RECEIVE_ATTEMPT:
            nextState = Object.assign({}, state);
            nextState[action.attempt.id] = action.attempt;
            return nextState;
        case REMOVE_ATTEMPT:
            nextState = Object.assign({}, state);
            delete nextState[action.attemptId];
            return nextState;
        default:
            return state;
    }
};

export default attemptsReducer;