import React from 'react';
import { calculateProgress, calculateTotalProgress } from "../../util/calculations"
import { library, icon, findIconDefinition } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

class GoalIndexItem extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            goal: this.props.goal,
            progress: calculateProgress(this.props.goal)
        }

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        // this.handleDelete = this.handleDelete.bind(this);
    }

    // handleDelete(e) {
    //     e.preventDefault();
    //     this.props.deleteGoal(this.state.goal._id);
    // }

    increment(e) {
        e.preventDefault();
        const newGoal = Object.assign({}, this.props.goal);
        console.log(newGoal, "before")
        newGoal.attempted += 1;
        console.log(newGoal, "after")
        this.props.updateGoal(newGoal)
            .then(goal => {
                const newCategory = Object.assign({}, this.props.category)
                newCategory["progress"] = calculateTotalProgress(this.props.goals)
                this.props.updateCategory(newCategory)
                    .then(() => this.setState({ progress: calculateProgress(goal) }))
            })
    }

    decrement(e) {
        e.preventDefault();
        const newGoal = Object.assign({}, this.props.goal);
        console.log(newGoal, "before")
        newGoal.attempted -= 1;
        console.log(newGoal, "after")
        this.props.updateGoal(newGoal)
            .then(goal => {
                const newCategory = Object.assign({}, this.props.category)
                newCategory["progress"] = calculateTotalProgress(this.props.goals)
                this.props.updateCategory(newCategory)
                    .then(() => this.setState({ progress: calculateProgress(goal) }))
            })
    }

    componentDidUpdate(prevProps) {
        if (prevProps.goal.attempted !== this.props.goal.attempted) {
            this.props.requestGoal(this.props.goal._id)
                .then((action) => {
                    this.setState({ progress: calculateProgress(action.goal) })
                })
        }
    }

    render() {
        let goal = this.props.goal
        let styles = {  
            width: `${ this.state.progress }%`
        }
        return (
            <div className="goal-index-item">
                <span className="goal-description">{goal.description}</span>
                <br/>
                <div className="row-me-up">
                    <span className="goal-ratio">{goal.attempted} / {goal.expected}</span>
                    <div className="goal-attempt-buttons">
                        { this.state.progress >= 100 ? (
                            <svg className="add-attempt-button svg-inline--fa" role="img" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"></path></svg>
                        ) : (
                            <svg onClick={this.increment} className="add-attempt-button svg-inline--fa" role="img" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"></path></svg>
                        )}
                        <svg onClick={this.decrement} className="minus-attempt-button svg-inline--fa" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zM124 296c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h264c6.6 0 12 5.4 12 12v56c0 6.6-5.4 12-12 12H124z" /></svg>
                    </div>
                </div>
                <br/>
                <div className="progress-bar">
                    <div className="progress-completed" style={styles}>
                    </div>
                </div>
                <br/>
                {/* <button onClick={this.handleDelete}>Delete me fam</button> */}
            </div>
        )
    }
}

export default GoalIndexItem;