import { connect } from 'react-redux';
import GoalForm from './goal_form';
import { updateGoal } from '../../actions/goal_actions'

const mapStateToProps = (state, ownProps) => {
    let goal = state.entities.goals[ownProps.match.params.goalId]
    return ({
        goal: {
            description: goal.description,
            expected: goal.expected,
            addToTotal: goal.addToTotal
        },
        formType: "Update",
        status: state.ui.tutorial
    })
};

const mapDispatchToProps = (dispatch) => {
    return {
        processForm: (goal) => dispatch(updateGoal(goal)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(GoalForm);