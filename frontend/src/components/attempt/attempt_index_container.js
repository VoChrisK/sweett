import { connect } from 'react-redux';
import AttemptIndex from './attempt_index';
import { deleteQuestion, updateQuestion } from "../../actions/question_actions";
import { requestQuestionAttempts } from '../../actions/attempt_actions';

const mapStateToProps = (state, ownProps) => {
    return ({
        question: ownProps.question,
        idx: ownProps.idx,
        attempts: Object.values(state.entities.attempts).filter(attempt => attempt.question_id === ownProps.question._id)
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        requestQuestionAttempts: questionId => dispatch(requestQuestionAttempts(questionId)),
        deleteQuestion: question_id => dispatch(deleteQuestion(question_id)),
        updateQuestion: question => dispatch(updateQuestion(question))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(AttemptIndex);