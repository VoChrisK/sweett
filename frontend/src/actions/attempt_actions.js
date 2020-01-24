import * as AttemptsApiUtil from './../util/attempts_util';

const receiveAttempts = attempts => {
    return ({
        type: RECEIVE_ATTEMPTS,
        attempts
    });
};

const receiveAttempt = attempt => {
    return ({
        type: RECEIVE_ATTEMPT,
        attempt
    });
};

const removeAttempt = attemptId => {
    return ({
        type: REMOVE_ATTEMPT,
        attemptId
    });
}

// export const requestGoals = categoryId => dispatch => {
//     return GoalsApiUtil.fetchGoals(categoryId)
//         .then(goals => dispatch(receiveGoals(goals)))
// };

// export const requestGoal = goalId => dispatch => {
//     return GoalsApiUtil.fetchGoal(goalId)
//         .then(goal => dispatch(receiveGoal(goal)))
// };

// export const createGoal = goal => dispatch => {
//     return GoalsApiUtil.createGoal(goal)
//         .then(newGoal => dispatch(receiveGoal(newGoal)))
// };

// export const updateGoal = goal => dispatch => {
//     return GoalsApiUtil.updateGoal(goal)
//         .then(updatedGoal => dispatch(receiveGoal(updatedGoal)))
// };

// export const deleteGoal = goalId => dispatch => {
//     return GoalsApiUtil.deleteGoal(goalId)
//         .then(() => dispatch(removeGoal(goalId)))
// };

// export const RECEIVE_GOALS = "RECEIVE_GOALS";
// export const RECEIVE_GOAL = "RECEIVE_GOAL";
// export const REMOVE_GOAL = "REMOVE_GOAL";