import { connect } from 'react-redux';
import QuestionIndex from './question_index';
import { createAttempt } from '../../actions/attempt_actions';
import { openModal } from '../../actions/modal_actions'


const mapStateToProps = state => ({
    state
});

const mapDispatchToProps = (dispatch) => {
    return {
        addQuestion: () => dispatch(openModal("addQuestion")),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(QuestionIndex);