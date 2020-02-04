import React from 'react';
import { withRouter } from 'react-router-dom';
import GoalIndexItemContainer from './goal_index_item_container';
import { library, icon, findIconDefinition } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import GoalCreateFormContainer from './goal_create_form_container';

class GoalIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            categoryId: this.props.categoryId
        }
        this.handleGoalForm = this.handleGoalForm.bind(this);
    }

    handleGoalForm(e) {
        e.preventDefault();
        let form = document.getElementsByClassName("goal-form-render")[0];
        form.classList.add('active')
    }

    componentDidMount() {
        this.props.requestGoals(this.props.match.params.categoryId)
        library.add(fas);
        const plus = findIconDefinition({ prefix: 'fas', iconName: 'plus' });
        const plusIcon = icon(plus);
        Array.from(plusIcon.node).map(n => document.getElementsByClassName('add-goal-button')[0].appendChild(n))
    }

    componentDidUpdate(prevProps) {
        if (prevProps.goals.length !== this.props.goals.length) {
            this.props.requestGoals(this.props.match.params.categoryId)
        }
    }

    render() {
        return (
            <div className="goal-index">
                <p>GOALS</p>
                <div onClick={this.handleGoalForm} className="add-goal-button"/>
                <ul className="goal-ul">
                    {
                        (!!this.props.goals) ? (
                            Object.values(this.props.goals).map((goal, idx) => {
                                return (
                                    <GoalIndexItemContainer deleteGoal={this.props.deleteGoal} goal={goal} key={`goal-${idx}`} />
                                )
                            })
                        ) : ('')
                    }
                    <li className="goal-form-render">
                        <GoalCreateFormContainer categoryId={this.props.categoryId}/>
                    </li>
                </ul>   
            </div>
        );
    }
}

export default withRouter(GoalIndex);