import { combineReducers } from 'redux';
import categoriesReducer from './category_reducer';

export default combineReducers({
    categories: categoriesReducer
});