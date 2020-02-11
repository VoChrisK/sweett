import axios from "axios";

export const fetchQuestionAttempts = questionId => {
    return axios.get(`/api/attempts/questions/${questionId}`);
};

export const fetchTaskAttempts = taskId => {
    return axios.get(`/api/attempts/tasks/${taskId}`);
};

export const fetchCategoryAttempts = categoryId => {
    return axios.get(`/api/attempts/categories/${categoryId}`);
};

export const fetchAttempt = questionId => {
    return axios.get(`/api/attempts/${questionId}`);
};

export const createAttempt = attempt => {
    return axios.post('/api/attempts', attempt);
};

export const deleteAttempt = attemptId => {
    return axios.delete(`/api/attempts/${attemptId}`);
};