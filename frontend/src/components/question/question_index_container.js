import { connect } from 'react-redux';
import QuestionIndex from './question_index';
import { requestQuestions } from '../../actions/question_actions';

const mapStateToProps = state => ({
    easyQuestions: Object.values(state.entities.questions).filter(question => question.difficulty === "Easy"),
    mediumQuestions: Object.values(state.entities.questions).filter(question => question.difficulty === "Medium"),
    hardQuestions: Object.values(state.entities.questions).filter(question => question.difficulty === "Hard")
});

const mapDispatchToProps = (dispatch) => ({
    requestQuestions: categoryId => dispatch(requestQuestions(categoryId))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(QuestionIndex);