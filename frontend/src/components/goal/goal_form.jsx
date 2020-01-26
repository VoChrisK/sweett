import React from 'react';

class GoalForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            goal: this.props.goal,
            formType: this.props.formType
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
        this.handleExpectedChange = this.handleExpectedChange.bind(this);
        this.handleDescChange = this.handleDescChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state.goal)
    }
    
    handleCheck() {
        let newGoal = Object.assign({}, this.state.goal)
        newGoal.addToTotal = !newGoal.addToTotal;
        this.setState({ goal: newGoal });
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
                <form onSubmit={this.handleSubmit}>
                    <input placeholder="Description" type="text" value={goal.description} onChange={this.handleDescChange}/>
                    <input placeholder="Expected # of attempts" type="text" value={goal.expected} onChange={this.handleExpectedChange}/>
                    <div>
                        <span>Add to Total?</span>
                        <input onClick={this.handleCheck} type="checkbox"/>
                    </div>
                    <input type="submit" value="Create Goal"/>
                </form>
            </div>
        )
    }
}

export default GoalForm;