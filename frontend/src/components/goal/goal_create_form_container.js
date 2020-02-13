import { connect } from 'react-redux';
import GoalForm from './goal_form';
import { createGoal } from '../../actions/goal_actions'

const mapStateToProps = (state, ownProps) => {
    return ({
        goal: {
            description: '',
            expected: '1',
            addToTotal: false,
        },
        formType: 'Create',
        errors: state.errors.goals
    })
};

const mapDispatchToProps = (dispatch) => {
    return {
        processForm: (goal) => dispatch(createGoal(goal)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(GoalForm);