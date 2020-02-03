import { RECEIVE_ATTEMPTS, RECEIVE_ATTEMPT, REMOVE_ATTEMPT } from './../actions/attempt_actions';

const attemptsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState;
    switch (action.type) {
        case RECEIVE_ATTEMPTS:
            nextState = {};
            action.attempts.forEach(attempt => {
                nextState[attempt._id] = attempt;
            })
            return nextState;
        case RECEIVE_ATTEMPT:
            nextState = Object.assign({}, state);
            nextState[action.attempt._id] = action.attempt;
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