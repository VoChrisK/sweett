import { connect } from 'react-redux';
import QuestionIndex from './question_index';
import { openModal } from '../../actions/modal_actions'
import { requestQuestions } from '../../actions/question_actions';


const mapStateToProps = state => ({
    questions: state.entities.questions,
    easyQuestions: Object.values(state.entities.questions).filter(question => question.difficulty === "Easy"),
    mediumQuestions: Object.values(state.entities.questions).filter(question => question.difficulty === "Medium"),
    hardQuestions: Object.values(state.entities.questions).filter(question => question.difficulty === "Hard")
});

const mapDispatchToProps = dispatch => {
  return {
    addQuestion: () => dispatch(openModal("addQuestion")),
    requestQuestions: categoryId => dispatch(requestQuestions(categoryId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionIndex);
