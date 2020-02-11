import { connect } from "react-redux";
import TaskIndexItem from "./task_index_item";
import { createAttempt } from "../../actions/attempt_actions";
import { recordTask, updateTask } from "../../actions/task_actions";
import { requestTaskAttempts } from './../../actions/attempt_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        idx: ownProps.idx,
        task: ownProps.task
    };
};

const mapDispatchToProps = (dispatch) => {
    return ({
        createAttempt: attempt => dispatch(createAttempt(attempt)),
        recordTask: idx => dispatch(recordTask(idx)),
        requestTaskAttempts: task_id => dispatch(requestTaskAttempts(task_id)),
        updateTask: task_id => dispatch(updateTask(task_id))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskIndexItem);
