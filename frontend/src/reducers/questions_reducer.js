import { RECEIVE_QUESTIONS, RECEIVE_QUESTION, REMOVE_QUESTION } from './../actions/question_actions';
import { RECEIVE_USER_LOGOUT } from '../actions/session_actions';

const questionsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState;
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            nextState = {};
            Object.keys(action.questions).forEach(key => {
                nextState[action.questions[key]._id] = action.questions[key]
            });
            return nextState;
        case RECEIVE_QUESTION:
            nextState = Object.assign({}, state);
            Object.keys(state).forEach(key => {
                nextState[state[key]._id] = state[key];
            });
            nextState[action.question._id] = action.question;
            return nextState;
        case REMOVE_QUESTION:
            nextState = Object.assign({}, state);
            delete nextState[action.questionId];
            return nextState;
        case RECEIVE_USER_LOGOUT:
            return {};
        default:
            return state;
    }
};

export default questionsReducer;