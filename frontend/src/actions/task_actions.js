import * as TasksApiUtil from "./../util/tasks_util";

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

export const requestCategoryTasks = categoryId => dispatch => {
  return TasksApiUtil.fetchCategoryTasks(categoryId).then(tasks =>
    dispatch(receiveTasks(tasks.data))
  );
};

export const requestTask = taskId => dispatch => {
  return TasksApiUtil.fetchTask(taskId).then(task =>
    dispatch(receiveTask(task.data))
  );
};

export const createTask = task => dispatch => {
  return TasksApiUtil.createTask(task).then(newtask =>
    dispatch(receiveTask(newtask.data))
  );
};

export const updateTask = task => dispatch => {
  return TasksApiUtil.updateTask(task).then(updatedTask =>
    dispatch(receiveTask(updatedTask))
  );
};

export const deleteTask = taskId => dispatch => {
  return TasksApiUtil.deleteTask(taskId).then(() =>
    dispatch(removeTask(taskId))
  );
};

export const RECEIVE_TASKS = "RECEIVE_TASKS";
export const RECEIVE_TASK = "RECEIVE_TASK";
export const REMOVE_TASK = "REMOVE_TASK";
