import React from 'react';

class GoalForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            goal: this.props.goal,
            formType: this.props.formType,
            errors: {
                description: '',
                expected: ''
            }
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
        this.handleExpectedChange = this.handleExpectedChange.bind(this);
        this.handleDescChange = this.handleDescChange.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    handleCancel(e) {
        e.preventDefault();
        document.getElementsByClassName("goal-form-render")[0].classList.remove("active");
    }

    handleSubmit(e) {
        e.preventDefault();
        let newGoal = Object.assign({}, this.state.goal);
        this.props.processForm(this.state.goal)
        this.setState({ goal: newGoal });

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
        console.log(this.props, 'goal props')
        let goal = this.state.goal;
        let errors = this.props.errors
        return(
            <div className="goal-form-container goal-index-item">
                <form className="goal-form">
                    <input placeholder="Description" className="bottom-margin" type="text" value={goal.description} onChange={this.handleDescChange}/>
                    <span className="bottom-margin error-text">{errors.description}</span>
                    <div className="bottom-margin">
                        <input min="1" max="1/0" className="expected-input" type="number" value={goal.expected} onChange={this.handleExpectedChange}/>
                        <span> Expected Attempts</span>
                    </div>
                    <span className="bottom-margin error-text">{errors.expected}</span>
                    <div className="bottom-margin">
                        <span>Add to Total?</span>
                        <input onClick={this.handleCheck} type="checkbox"/>
                    </div>
                    <div className="submit-or-cancel">
                        <button className="goal-button" onClick={this.handleSubmit}>Create Goal</button>
                        <button className="goal-button" onClick={this.handleCancel}>Cancel</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default GoalForm;