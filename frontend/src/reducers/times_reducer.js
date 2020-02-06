import { RECEIVE_TIME } from './../actions/time_actions';

const defaultTime = {
    limit: 0
};

const timeReducer = (state = defaultTime, action) => {
    Object.freeze(state);
    let nextState;
    switch(action.type) {
        case RECEIVE_TIME:
            nextState = action.time;
            return nextState;
        default:
            return state;
    }
}

export default timeReducer;