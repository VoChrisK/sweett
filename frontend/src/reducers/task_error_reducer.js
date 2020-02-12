import {
    RECEIVE_TASK_ERRORS,
    RECEIVE_TASK
} from '../actions/task_actions';

const _nullErrors = [];

const TaskErrorsReducer = (state = _nullErrors, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_TASK_ERRORS:
            return action.errors;
        case RECEIVE_TASK:
            return _nullErrors;
        default:
            return state;
    }
};

export default TaskErrorsReducer;