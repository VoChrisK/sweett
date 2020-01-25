import { connect } from 'react-redux';
import GoalForm from './goal_form';
import { createGoal } from '../../actions/goal_actions'

const mapStateToProps = state => {
    return ({
        goal: {
            description: '',
            expected: '',
            addToTotal: true
        },
        formType: 'Create'
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