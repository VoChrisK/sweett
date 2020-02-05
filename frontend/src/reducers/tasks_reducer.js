import {
  RECEIVE_TASK,
  RECEIVE_TASKS,
  REMOVE_TASK
} from "./../actions/task_actions";

const tasksReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState;
  switch (action.type) {
    case RECEIVE_TASKS:
      nextState = Object.assign({}, state);
      action.tasks.forEach(task => {
        nextState[task._id] = task;
      });
      return nextState;
    case RECEIVE_TASK:
      nextState = Object.assign({}, state);
      nextState[action.task._id] = action.task;
      return nextState;
    case REMOVE_TASK:
      nextState = Object.assign({}, state);
      delete nextState[action.taskId];
      return nextState;
    default:
      return state;
  }
};

export default tasksReducer;
