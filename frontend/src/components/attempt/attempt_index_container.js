import { connect } from 'react-redux';
import AttemptIndex from './attempt_index';

const mapStateToProps = (state) => {
    return ({
        attempts: Object.values(state.entities.attempts)
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        requestQuestionAttempts: questionId => dispatch(requestQuestionAttempts(questionId))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(AttemptIndex);