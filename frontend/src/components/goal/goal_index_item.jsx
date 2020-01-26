import React from 'react';
import { calculateProgress, calculateTotalProgress } from "../../util/calculations"

class GoalIndexItem extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            goal: this.props.goal,
            progress: calculateProgress(this.props.goal)
        }

        this.increment = this.increment.bind(this);
    }

    increment(e) {
        e.preventDefault();
        const newGoal = Object.assign({}, this.props.goal);
        newGoal["attempted"] += 1;
        this.props.updateGoal(newGoal)
            .then(goal => {
                console.log(goal, "This is the payload of updateGoal")
                const newCategory = Object.assign({}, this.props.category)
                newCategory["progress"] = calculateTotalProgress(this.props.goals)
                this.props.updateCategory(newCategory)
                    .then(() => this.setState({ progress: calculateProgress(goal) }))
            })
    }

    render() {
        let goal = this.state.goal
        let styles = {  
            width: `${ goal.attempted / goal.expected }%`
        }
        return (
            <div className="goal-index-item">
                <span className="goal-ecks"></span>
                <span className="goal-description">{goal.description}</span>
                <br/>
                <span className="goal-ratio">{goal.attempted} / {goal.expected}</span>
                <br/>
                <span className="goal-progress">Progress:</span>
                <div className="progress-bar">
                    <div className="progress-completed" style={styles}>
                    </div>
                </div>
                <br/>
            </div>
        )
    }
}

export default GoalIndexItem;