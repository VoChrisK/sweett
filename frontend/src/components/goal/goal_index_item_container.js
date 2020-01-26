import { connect } from 'react-redux';
import GoalIndexItem from './goal_index_item';
import { updateGoal, deleteGoal } from '../../actions/goal_actions';

const mapStateToProps = (state, ownProps) => {
    return ({
        goal: ownProps.goal,
        goals: Object.values(state.entities.goals),
        category_Id: ownProps.goal.category_Id,
        category: state.entities.categories[ownProps.goal.category_id]
    })
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateGoal: (goal) => dispatch(updateGoal(goal)),
        deleteGoal: (goalId) => dispatch(deleteGoal(goalId))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(GoalIndexItem);