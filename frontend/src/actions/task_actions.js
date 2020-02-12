import * as TasksApiUtil from "./../util/tasks_util";
export const recordTask = idx => {
  return ({
    type: RECORD_TASK,
    idx
  });
}

const receiveTasks = tasks => {
  return {
    type: RECEIVE_TASKS,
    tasks
  };
};

const receiveTask = task => {
  return {
    type: RECEIVE_TASK,
    task
  };
};

const removeTask = taskId => {
  return {
    type: REMOVE_TASK,
    taskId
  };
};

const receiveErrors = errors => {
  return ({
    type: RECEIVE_TASK_ERRORS,
    errors
  })
}

export const requestCategoryTasks = categoryId => dispatch => {
  return TasksApiUtil.fetchCategoryTasks(categoryId).then(tasks =>
    dispatch(receiveTasks(tasks.data)))
    .catch(errors => dispatch(receiveErrors(errors.response.data)));
};

export const requestTask = taskId => dispatch => {
  return TasksApiUtil.fetchTask(taskId).then(task =>
    dispatch(receiveTask(task.data)))
    .catch(errors => dispatch(receiveErrors(errors.response.data)));
};

export const createTask = task => dispatch => {
  return TasksApiUtil.createTask(task).then(newtask =>
    dispatch(receiveTask(newtask.data)))
    .catch(errors => dispatch(receiveErrors(errors.response.data)));
};

export const updateTask = task => dispatch => {
  return TasksApiUtil.updateTask(task).then(updatedTask =>
    dispatch(receiveTask(updatedTask.data)))
    .catch(errors => dispatch(receiveErrors(errors.response.data)));
};

export const deleteTask = taskId => dispatch => {
  return TasksApiUtil.deleteTask(taskId).then(() =>
    dispatch(removeTask(taskId)))
    .catch(errors => dispatch(receiveErrors(errors.response.data)));
};

export const RECEIVE_TASKS = "RECEIVE_TASKS";
export const RECEIVE_TASK = "RECEIVE_TASK";
export const REMOVE_TASK = "REMOVE_TASK";
export const RECORD_TASK = "RECORD_TASK";
export const RECEIVE_TASK_ERRORS = "RECEIVE_TASK_ERRORS";
