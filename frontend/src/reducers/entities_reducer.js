import { combineReducers } from 'redux';
import categoriesReducer from './category_reducer';
import goalsReducer from './goal_reducer';
import questionsReducer from './question_reducer';
import attemptsReducer from './attempts_reducer';

export default combineReducers({
    categories: categoriesReducer,
    goals: goalsReducer,
    questions: questionsReducer,
    attempts: attemptsReducer
});