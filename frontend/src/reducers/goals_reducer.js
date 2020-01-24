import { RECEIVE_GOALS, RECEIVE_GOAL, REMOVE_GOAL } from './../actions/goal_actions';

const goalsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState;
    switch (action.type) {
        case RECEIVE_GOALS:
            return Object.assign({}, action.goals);
        case RECEIVE_GOAL:
            nextState = Object.assign({}, state);
            nextState[action.goal.id] = action.goal;
            return nextState;
        case REMOVE_GOAL:
            nextState = Object.assign({}, state);
            delete nextState[action.goalId];
            return nextState;
        default:
            return state;
    }
};

export default goalsReducer;