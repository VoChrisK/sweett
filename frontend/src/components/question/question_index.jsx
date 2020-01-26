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
                <div className="question-title-description-add">
                    <div>

                    </div>
                    <div className="question-title-description">
                        <p className="question-index-title">QUESTIONS</p>
                        <p className="question-index-description">37 / 90 minutes completed</p>
                    </div>
                    <div id="question-add">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus-circle" class="svg-inline--fa fa-plus-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"></path></svg>
                    </div>
                </div>
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