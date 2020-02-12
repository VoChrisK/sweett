import { connect } from 'react-redux';
import AttemptIndex from './attempt_index';
import { deleteQuestion, updateQuestion } from "../../actions/question_actions";
import { requestQuestionAttempts, requestTaskAttempts } from '../../actions/attempt_actions';
import { deleteTask, updateTask } from '../../actions/task_actions';

const mapStateToProps = (state, ownProps) => {
    return ({
        task: ownProps.task,
        idx: ownProps.idx,
        attempts: Object.values(state.entities.attempts).filter(attempt => attempt.task_id === ownProps.task._id)
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        requestTaskAttempts: taskId => dispatch(requestTaskAttempts(taskId)),
        deleteTask: taskId => dispatch(deleteTask(taskId)),
        updateTask: task => dispatch(updateTask(task))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(AttemptIndex);