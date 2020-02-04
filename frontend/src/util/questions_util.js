import axios from "axios";

export const fetchQuestions = categoryId => {
    return axios.get(`/api/questions/category/${categoryId}`);
};

export const fetchQuestion = questionId => {
    return axios.get(`/api/questions/${questionId}`);
};

export const createQuestion = question => {
    console.log(question);
    return axios.post('/api/questions', question);
};

export const updateQuestion = question => {
    return axios.patch(`/api/questions/${question._id}`, question);
};

export const deleteQuestion = questionId => {
    return axios.delete(`/api/questions/${questionId}`);
};