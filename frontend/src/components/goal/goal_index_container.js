import { connect } from 'react-redux';
import GoalIndex from './goal_index';
import { requestGoals, createGoal, deleteGoal } from '../../actions/goal_actions'

const mapStateToProps = (state, ownProps) => {
    return ({
        goals: state.entities.goals,
        // categoryId: ownProps.match.params.categoryId
        categoryId: "5e2cb386dd8bb11061344d4f"
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