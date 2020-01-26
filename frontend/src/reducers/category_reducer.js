import { RECEIVE_CATEGORIES, RECEIVE_CATEGORY, REMOVE_CATEGORY } from './../actions/category_actions';

const categoryReducer = (state = {}, action) => {
    Object.freeze(state);
    // console.log(state, 'reducer state')
    let nextState;
    switch(action.type) {
        case RECEIVE_CATEGORIES:
            nextState = {}
            Object.keys(action.categories).forEach(key => {
                nextState[action.categories[key]._id] = action.categories[key]
            })
            return nextState;
            // return Object.assign({}, action.categories);
        case RECEIVE_CATEGORY:
            nextState = Object.assign({}, state);

            nextState[action.category.data._id] = action.category.data;
            return nextState;
        case REMOVE_CATEGORY:
            // console.log(action)
            nextState = Object.assign({}, state);
            // console.log(state, 'remove state')
            delete nextState[action.categoryId];
            return nextState;
        default:
            return state;
    }
};

export default categoryReducer;