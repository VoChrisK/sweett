import React from 'react';

class GoalForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            goal: this.props.goal,
            formType: this.props.formType
        }

        this.handleExpectedChange = this.handleExpectedChange.bind(this);
        this.handleDescChange = this.handleDescChange.bind(this);
    }

    handleDescChange(e) {
        e.preventDefault();
        let newGoal = Object.assign({}, this.state.goal)
        newGoal.description = e.currentTarget.value;
        this.setState({goal: newGoal});
    }

    handleExpectedChange(e) {
        e.preventDefault();
        let newGoal = Object.assign({}, this.state.goal)
        newGoal.expected = e.currentTarget.value;
        this.setState({ goal: newGoal });
    }

    render() {
        let goal = this.state.goal;
        return(
            <div>
                <input placeholder="Description" type="text" value={goal.description} onChange={this.handleDescChange}/>
                <input placeholder="Expected # of attempts" type="text" value={goal.expected} onChange={this.handleExpectedChange}/>
                <div>
                    <span>Add to Total?</span>
                    <input type="checkbox"/>
                </div>
            </div>
        )
    }
}

export default GoalForm;