import { RECEIVE_CATEGORIES, RECEIVE_CATEGORY, REMOVE_CATEGORY } from './../actions/category_actions';

const categoryReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState;
    switch(action.type) {
        case RECEIVE_CATEGORIES:
            return Object.assign({}, action.categories);
        case RECEIVE_CATEGORY:
            nextState = Object.assign({}, state);
            nextState[action.category.id] = action.category;
            return nextState;
        case REMOVE_CATEGORY:
            nextState = Object.assign({}, state);
            delete nextState[action.categoryId];
            return nextState;
        default:
            return state;
    }
};

export default categoryReducer;