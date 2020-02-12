import { combineReducers } from 'redux';

import SessionErrorsReducer from './session_errors_reducer';
import GoalErrorsReducer from './goal_errors_reducer';
import CategoryErrorsReducer from './category_error_reducer';
import TaskErrorReducer from './task_error_reducer'

export default combineReducers({
    session: SessionErrorsReducer,
    goals: GoalErrorsReducer,
    categories: CategoryErrorsReducer,
    tasks: TaskErrorReducer
});