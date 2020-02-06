import { connect } from "react-redux";
import TaskForm from './task_form'
import { openModal, closeModal } from "../../actions/modal_actions";
import { createTask } from '../../actions/task_actions'

const mapStateToProps = state => {
    return {
        state
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: task => dispatch(createTask(task)),
        closeModal: () => dispatch(closeModal()),
        addTask: () => dispatch(openModal("addTask"))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
