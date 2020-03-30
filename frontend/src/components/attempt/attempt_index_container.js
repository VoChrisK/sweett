import { connect } from 'react-redux';
import AttemptIndex from './attempt_index';
import { requestTaskAttempts } from '../../actions/attempt_actions';
import { updateTask, requestTask } from '../../actions/task_actions';

const mapStateToProps = (state, ownProps) => {
    return ({
        note: ownProps.note,
        task: ownProps.task,
        idx: ownProps.idx,
        attempts: Object.values(state.entities.attempts).filter(attempt => attempt.task_id === ownProps.task._id)
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        requestTaskAttempts: taskId => dispatch(requestTaskAttempts(taskId)),
        requestTask: taskId => dispatch(requestTask(taskId)),
        updateTask: task => dispatch(updateTask(task))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(AttemptIndex);