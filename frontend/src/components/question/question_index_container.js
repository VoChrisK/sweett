import { connect } from 'react-redux';
import QuestionIndex from './question_index';
import { openModal } from '../../actions/modal_actions'
import { requestQuestions } from '../../actions/question_actions';
import { receiveTime } from './../../actions/time_actions';
import { calculateActualTime, calculateExpectedTime } from '../../util/calculations';
import { updateCategory } from '../../actions/category_actions';
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state, ownProps) => {
    console.log(state.entities.questions, "state.entities.questions")
    return({
        questions: state.entities.questions,
        easyQuestions: Object.values(state.entities.questions).filter(question => question.section === "Easy"),
        mediumQuestions: Object.values(state.entities.questions).filter(question => question.section === "Medium"),
        hardQuestions: Object.values(state.entities.questions).filter(question => question.section === "Hard"),
        actualTime: calculateActualTime(Object.values(state.entities.attempts)),
        expectedTime: calculateExpectedTime(ownProps.category.timeLimit, Object.values(state.entities.goals))
    })
};

const mapDispatchToProps = (dispatch) => {
    return {
        addQuestion: () => dispatch(openModal("addQuestion")),
        requestQuestions: categoryId => dispatch(requestQuestions(categoryId)),
        updateCategory: category => dispatch(updateCategory(category)),
        editTimeLimit: time => dispatch(receiveTime(time))
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(QuestionIndex));
