import React from 'react';
import { withRouter } from 'react-router-dom';
import GoalIndexItem from './goal_index_item';
import { library, icon, findIconDefinition } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import GoalCreateFormContainer from './goal_create_form_container';

class GoalIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            goals: this.props.goals,
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
        library.add(fas);
        const plus = findIconDefinition({ prefix: 'fas', iconName: 'plus' });
        const plusIcon = icon(plus);
        Array.from(plusIcon.node).map(n => document.getElementsByClassName('add-goal-button')[0].appendChild(n))
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
        console.log(document.getElementsByClassName("goal-ul")[0])
        return (
            <div className="goal-index">
                <p>GOALS</p>
                <ul className="goal-ul">
                    {
                        (!!this.state.goals) ? (
                            Object.values(this.state.goals).map((goal, idx) => {
                                return <GoalIndexItem goal={goal} key={`goal-${idx}`} />
                            })
                        ) : ('')
                    }
                    <li className="goal-form-render">
                        <GoalCreateFormContainer />
                    </li>
                </ul>
                <div onClick={this.handleGoalForm} className="add-goal-button"/>
            </div>
        );
    }
}

export default withRouter(GoalIndex);