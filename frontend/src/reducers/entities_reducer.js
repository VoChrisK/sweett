import { combineReducers } from 'redux';
import categoriesReducer from './category_reducer';
import goalsReducer from './goals_reducer';
import questionsReducer from './questions_reducer';
import attemptsReducer from './attempts_reducer';
import timesReducer from './times_reducer';

export default combineReducers({
    categories: categoriesReducer,
    goals: goalsReducer,
    questions: questionsReducer,
    attempts: attemptsReducer,
    time: timesReducer
});