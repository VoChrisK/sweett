import React from 'react';
import { withRouter } from 'react-router-dom'
import QuestionIndexItem from './question_index_item';

class QuestionIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            idx = -1 //keeps track of which question is being recorded
        }
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
                <p className="question-index-title">QUESTIONS</p>
                <p className="question-index-description">37 / 90 minutes completed</p>
                <div id="question-index-container">
                    <div className="question-container">
                        <p className="question-container-title">Easy</p>
                        <QuestionIndexItem />
                        <QuestionIndexItem />
                        <QuestionIndexItem />

                    </div>
                    <div className="question-container">
                        <p className="question-container-title">Medium</p>
                        <QuestionIndexItem />
                        <QuestionIndexItem />
                        <QuestionIndexItem />

                    </div>
                    <div className="question-container">
                        <p className="question-container-title">Hard</p>
                        <QuestionIndexItem />
                        <QuestionIndexItem />
                        <QuestionIndexItem />
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(QuestionIndex);