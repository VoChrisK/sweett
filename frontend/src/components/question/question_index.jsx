import React from 'react';
import { withRouter } from 'react-router-dom'
import QuestionIndexItemContainer from './question_index_item_container';

class QuestionIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.requestQuestions(this.props.match.params.categoryId);
    }

    toggleSidebar() {
        const sidebar = document.getElementById("sidebar");
        const questionIndex = document.getElementsByClassName("question-index")[0];
        const goalIndex = document.getElementsByClassName("goal-index")[0];
        const sidebarToggleButton = document.getElementById("sidebar-toggle-button");

        // re-style question, goal divs
        if (sidebar.style.display === "none") {
            sidebar.style.display = "block";
            questionIndex.style.width = "64%";
            goalIndex.style.width = "20%";
            sidebarToggleButton.style.left = "0.2%";
        } else {
            sidebar.style.display = "none";
            questionIndex.style.width = "72%";
            goalIndex.style.width = "28%";
            sidebarToggleButton.style.left = "0.2%";
        }
    }

    render() {
        return (
            <div className="question-index">
                <button id="sidebar-toggle-button" onClick={this.toggleSidebar}>
                </button>
                <div className="question-title-description-add">
                    <div className="question-title-description">
                        <p className="question-index-title">QUESTIONS</p>
                        <p className="question-index-description">37 / 90 minutes completed</p>
                    </div>
                    <div id="question-add" onClick={() => this.props.addQuestion()}>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" class="svg-inline--fa fa-plus fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>
                    </div>
                </div>

                <div id="question-index-container">
                    <div className="question-container">
                        <p className="question-container-title">Easy</p>
                        {
                            this.props.easyQuestions.map((question, idx) => <QuestionIndexItemContainer key={idx} question={question} idx={idx} />)
                        }
                    </div>
                    <div className="question-container">
                        <p className="question-container-title">Medium</p>
                        {
                            this.props.mediumQuestions.map((question, idx) => <QuestionIndexItemContainer key={idx} question={question} idx={idx} />)
                        }
                    </div>
                    <div className="question-container">
                        <p className="question-container-title">Hard</p>
                        {
                            this.props.hardQuestions.map((question, idx) => <QuestionIndexItemContainer key={idx} question={question} idx={idx} />)
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(QuestionIndex);