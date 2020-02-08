import axios from "axios";

export const fetchCategoryTasks = categoryId => {
  return axios.get(`/api/tasks/categories/${categoryId}`);
};

export const fetchTask = categoryId => {
  return axios.get(`/api/tasks/${categoryId}`);
};

export const createTask = task => {
  console.log('task util')
  return axios.post("/api/tasks", task);
};

export const updateTask = task => {
  return axios.patch(`/api/tasks/${task._id}`, task);
};

export const deleteTask = taskId => {
  return axios.delete(`/api/tasks/${taskId}`);
};
