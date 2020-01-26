import { connect } from 'react-redux';
import GoalIndex from './goal_index';
import { requestGoals, createGoal, deleteGoal } from '../../actions/goal_actions'

const mapStateToProps = (state, ownProps) => {
    return ({
        goals: state.entities.goals,
        categoryId: ownProps.categoryId
    })
};

const mapDispatchToProps = (dispatch) => {
    return {
        requestGoals: (categoryId) => dispatch(requestGoals(categoryId)),
        createGoal: (goal) => dispatch(createGoal(goal)),
        deleteGoal: (goalId) => dispatch(deleteGoal(goalId))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(GoalIndex);