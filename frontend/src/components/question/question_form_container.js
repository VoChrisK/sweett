import { connect } from "react-redux";
import QuestionForm from './question_form'
import { closeModal } from "../../actions/modal_actions";
import { createQuestion } from '../../actions/question_actions'

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps, 'ownprops')
    console.log(state, 'question map state')
    return {
        state,
        categoryId: ownProps.categoryId
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: question => dispatch(createQuestion(question)),
        closeModal: () => dispatch(closeModal()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionForm);
