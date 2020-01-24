import React from 'react';
import { withRouter } from 'react-router-dom'
import GoalIndexItem from './goal_index_item';


class GoalIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            goals: this.props.goals
        }
    }

    componentDidMount() {
        this.props.requestGoals(this.props.match.params.categoryId)
            .then((goals) => this.setState({ goals: goals }));
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     if (this.props.goals !== nextProps.goals) {
    //         return true
    //     }
    //     if (this.state.goals !== nextState.goals) {
    //         return true
    //     }
    //     return false
    // }

    // componentDidUpdate() {
    //     this.props.requestGoals(this.props.match.params.categoryId)
    //         .then((goals) => this.setState({ goals: goals }));
    // }

    render() {
        return (
            <div className="goal-index">
                <p>GOALS</p>
                <GoalIndexItem />
            </div>
        );
    }
}

export default withRouter(GoalIndex);