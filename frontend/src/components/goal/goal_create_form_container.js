import { connect } from 'react-redux';
import GoalForm from './goal_form';
import { createGoal } from '../../actions/goal_actions'

const mapStateToProps = (state, ownProps) => {
    return ({
        goal: {
            description: '',
            expected: 1,
            addToTotal: false,
            category_id: ownProps.categoryId
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