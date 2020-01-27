import * as GoalsApiUtil from './../util/goals_util';

const receiveGoals = goals => {
    return ({
        type: RECEIVE_GOALS,
        goals
    });
};

const receiveGoal = goal => {
    return ({
        type: RECEIVE_GOAL,
        goal
    });
};

const removeGoal = goalId => {
    return ({
        type: REMOVE_GOAL,
        goalId
    });
}

const receieveErrors = errors => {
    return ({
        type: RECEIVE_GOAL_ERRORS,
        errors
    })
}

export const requestGoals = categoryId => dispatch => {
    return GoalsApiUtil.fetchGoals(categoryId)
        .then(goals => dispatch(receiveGoals(goals.data)))
        .catch(errors => dispatch(receieveErrors(errors.response.data)))
};

export const requestGoal = goalId => dispatch => {
    return GoalsApiUtil.fetchGoal(goalId)
        .then(goal => dispatch(receiveGoal(goal.data)))
        .catch(errors => dispatch(receieveErrors(errors.response.data)))
};

export const createGoal = goal => dispatch => {
    return GoalsApiUtil.createGoal(goal)
        .then(newGoal => {
            document.getElementsByClassName("goal-form-render")[0].classList.remove("active");
            dispatch(receiveGoal(newGoal.data))
        })
        .catch(errors => dispatch(receieveErrors(errors.response.data)))
};

export const updateGoal = goal => dispatch => {
    return GoalsApiUtil.updateGoal(goal)
        .then(updatedGoal => dispatch(receiveGoal(updatedGoal.data)))
        .catch(errors => dispatch(receieveErrors(errors.response.data)))
};

export const deleteGoal = goalId => dispatch => {
    return GoalsApiUtil.deleteGoal(goalId)
        .then(() => dispatch(removeGoal(goalId)))
        .catch(errors => dispatch(receieveErrors(errors.response.data)))
};

export const RECEIVE_GOALS = "RECEIVE_GOALS";
export const RECEIVE_GOAL = "RECEIVE_GOAL";
export const REMOVE_GOAL = "REMOVE_GOAL";
export const RECEIVE_GOAL_ERRORS = "RECEIVE_GOAL_ERRORS";