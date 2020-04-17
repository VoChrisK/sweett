import { connect } from "react-redux";
import TaskIndexItem from "./task_index_item";
import { createAttempt } from "../../actions/attempt_actions";
import { recordTask, updateTask, deleteTask } from "../../actions/task_actions";
import { requestTaskAttempts } from './../../actions/attempt_actions';
import { openModal } from '../../actions/modal_actions'

const mapStateToProps = (state, ownProps) => {
    return {
        idx: ownProps.idx,
        task: ownProps.task,
        status: state.ui.tutorial
    };
};

const mapDispatchToProps = (dispatch) => {
    return ({
        addEntry: () => dispatch(openModal('addEntry')),
        createAttempt: attempt => dispatch(createAttempt(attempt)),
        recordTask: idx => dispatch(recordTask(idx)),
        requestTaskAttempts: task_id => dispatch(requestTaskAttempts(task_id)),
        updateTask: task_id => dispatch(updateTask(task_id)),
        deleteTask: taskId => dispatch(deleteTask(taskId)),
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskIndexItem);
