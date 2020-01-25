import { RECEIVE_CATEGORIES, RECEIVE_CATEGORY, REMOVE_CATEGORY } from './../actions/category_actions';

const categoryReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState;
    switch(action.type) {
        case RECEIVE_CATEGORIES:
            nextState = {};
            Object.keys(action.categories).forEach(id => nextState[id] = state[id]);
            console.log(nextState);
            return nextState;
        case RECEIVE_CATEGORY:
            nextState = {};
            Object.keys(state).forEach((id) => nextState[id] = state[id])
            nextState[action.category.data._id] = action.category.data;
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