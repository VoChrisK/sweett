import { connect } from 'react-redux';
import GoalIndexItem from './goal_index_item';
import { updateGoal, deleteGoal, requestGoal } from '../../actions/goal_actions';
import { updateCategory } from '../../actions/category_actions';
import { withRouter } from "react-router-dom"


const mapStateToProps = (state, ownProps) => {
    return ({
        currentUser: state.session.user,
        goal: ownProps.goal,
        goals: Object.values(state.entities.goals),
        category_Id: ownProps.goal.category_Id,
        category: state.entities.categories[ownProps.goal.category_id]
    })
};

const mapDispatchToProps = (dispatch) => {
    return {
        requestGoal: (goalId) => dispatch(requestGoal(goalId)),
        updateGoal: (goal) => dispatch(updateGoal(goal)),
        deleteGoal: (goalId) => dispatch(deleteGoal(goalId)),
        updateCategory: (category) => dispatch(updateCategory(category))
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(GoalIndexItem));