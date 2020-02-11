import { connect } from 'react-redux';
import DefaultCategory from './default_category';

// const mapStateToProps = (state, ownProps) => ({
//     idx: ownProps.idx
// });

// const mapDispatchToProps = (dispatch) => {
//     return {
//         createAttempt: attempt => dispatch(createAttempt(attempt)),
//         recordQuestion: idx => dispatch(recordQuestion(idx)),
//         requestQuestionAttempts: question_id => dispatch(requestQuestionAttempts(question_id)),
//         updateQuestion: question_id => dispatch(updateQuestion(question_id))
//     }
// }

export default connect(
    null,
    null,
)(DefaultCategory);