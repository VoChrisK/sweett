import * as CategoriesApiUtil from './../util/categories_util';

const receiveCategories = categories => {

    return ({
        type: RECEIVE_CATEGORIES,
        categories
    });
};

const receiveCategory = category => {
    return ({
        type: RECEIVE_CATEGORY,
        category
    });
};

const removeCategory = categoryId => {
    return ({
        type: REMOVE_CATEGORY,
        categoryId
    });
}

const receiveErrors = errors => {
    return ({
        type: RECEIVE_CATEGORY_ERRORS,
        errors
    })
}

export const requestCategories = userId => dispatch => {
    return CategoriesApiUtil.fetchCategories(userId)
    .then(categories => dispatch(receiveCategories(categories.data)))
        .catch(errors => dispatch(receiveErrors(errors.response.data)))
};

export const requestCategory = categoryId => dispatch => {
    return CategoriesApiUtil.fetchCategory(categoryId)
    .then(category => dispatch(receiveCategory(category.data)))
        .catch(errors => dispatch(receiveErrors(errors.response.data)))
};

export const createCategory = category => dispatch => {
    return CategoriesApiUtil.createCategory(category)
    .then(newCategory => dispatch(receiveCategory(newCategory)))
        .catch(errors => dispatch(receiveErrors(errors.response.data)))
};

export const updateCategory = category => dispatch => {
    return CategoriesApiUtil.updateCategory(category)
    .then(updatedCategory => dispatch(receiveCategory(updatedCategory.data)))
        .catch(errors => dispatch(receiveErrors(errors.response.data)))
};

export const deleteCategory = categoryId => dispatch => {
    
    return CategoriesApiUtil.deleteCategory(categoryId)
    .then( () => dispatch(removeCategory(categoryId)))
            .catch(errors => dispatch(receiveErrors(errors.response.data)))
};

export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES";
export const RECEIVE_CATEGORY = "RECEIVE_CATEGORY";
export const REMOVE_CATEGORY = "REMOVE_CATEGORY";
export const RECEIVE_CATEGORY_ERRORS = "RECEIVE_CATEGORY_ERRORS";