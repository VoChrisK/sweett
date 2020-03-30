import React from 'react';
import { withRouter } from 'react-router-dom';

class GoalForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            goal: this.props.goal,
            formType: this.props.formType,
            errors: {}
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
        this.handleExpectedChange = this.handleExpectedChange.bind(this);
        this.handleDescChange = this.handleDescChange.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    handleCancel(e) {
        e.preventDefault();
        this.setState({ goal: this.props.goal });
        this.setState({ errors: { description: '', expected: '' }})
        document.getElementsByClassName("goal-form-render")[0].classList.remove("active");
    }

    handleSubmit(e) {
        e.preventDefault();
        let goal = this.state.goal
        goal.category_id = this.props.match.params.categoryId
        this.props.processForm(this.state.goal)
            .then(res => {
                if (!res) {
                    this.setState({ goal: this.props.goal });
                    this.setState({ errors: {}});
                } else {
                    this.setState({ errors: this.props.errors });
                }
            })
        
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
        let errors = this.state.errors
        return(
            <div className="goal-form-container goal-index-item">
                <form className="goal-form">
                    <input placeholder="Goal Description" className="bottom-margin" type="text" value={goal.description} onChange={this.handleDescChange}/>
                    <span className="bottom-margin error-text">{errors.description}</span>
                    <div className="bottom-margin">
                        <input min="1" max="1/0" className="expected-input" type="number" value={goal.expected} onChange={this.handleExpectedChange}/>
                        <span className="no-wrap"> Attempt(s) towards Goal</span>
                    </div>
                    <span className="bottom-margin error-text">{errors.expected}</span>
                    <div className="bottom-margin">
                        <span>Track Time?</span>
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

export default withRouter(GoalForm);