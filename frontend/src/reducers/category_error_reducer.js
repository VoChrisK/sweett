import {
    RECEIVE_CATEGORY_ERRORS,
    RECEIVE_CATEGORY
} from '../actions/category_actions';

const _nullErrors = [];

const CategoryErrorsReducer = (state = _nullErrors, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CATEGORY_ERRORS:
            return action.errors;
        case RECEIVE_CATEGORY:
            return _nullErrors;
        default:
            return state;
    }
};

export default CategoryErrorsReducer;