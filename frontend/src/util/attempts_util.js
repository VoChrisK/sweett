import axios from "axios";

export const fetchAttempts = questionId => {
    return axios.get(`/api/attempts/questions/${questionId}`);
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