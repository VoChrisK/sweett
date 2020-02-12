import { connect } from "react-redux";
import TaskForm from './task_form'
import { openModal, closeModal } from "../../actions/modal_actions";
import { createTask } from '../../actions/task_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    return {
        state,
        category: state.entities.categories[ownProps.location.pathname.split("/")[2]],
        errors: state.errors.tasks
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: task => dispatch(createTask(task)),
        closeModal: () => dispatch(closeModal()),
        addTask: () => dispatch(openModal("addTask"))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TaskForm));
