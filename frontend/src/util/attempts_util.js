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

export const deleteGoal = goalId => {
    return axios.delete(`/api/goals/${goalId}`);
};