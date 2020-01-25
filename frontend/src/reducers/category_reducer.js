import { RECEIVE_CATEGORIES, RECEIVE_CATEGORY, REMOVE_CATEGORY } from './../actions/category_actions';

const categoryReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState;
    switch(action.type) {
        case RECEIVE_CATEGORIES:
            nextState = {}
            Object.keys(action.categories).forEach(key => {
                nextState[action.categories[key]._id] = action.categories[key]
            });
            return nextState;
        case RECEIVE_CATEGORY:
            nextState = {};
            Object.keys(state).forEach(key => {
                nextState[state[key]._id] = state[key];
            });
            nextState[action.category._id] = action.category;
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