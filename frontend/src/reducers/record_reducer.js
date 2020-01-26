import { RECORD_QUESTION } from '../actions/question_actions';

const noRecordingQuestions = {
    recordedQuestion: -1
}

export default (state = noRecordingQuestions, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECORD_QUESTION:
            return { recordedQuestion: action.idx };
        default:
            return state;
    }
};