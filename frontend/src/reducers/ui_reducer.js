import { combineReducers } from 'redux';

import modal from './modal_reducer';
import TutorialReducer from './tutorial_reducer';

export default combineReducers({
    modal,
    tutorial: TutorialReducer
});