import React from 'react';
import QuestionIndexItemContainer from './question_index_item_container';

class QuestionIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loadedEasyQuestions: false,
            loadedMediumQuestions: false,
            loadedHardQuestions: false,
            timeLimit: this.props.category.timeLimit
        }

        // console.log(this.props.expectedTime);

        this.handleInput = this.handleInput.bind(this);
    }

    componentDidMount() {
        this.props.requestQuestions(this.props.category._id);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.questions.length !== this.props.questions.length) {
            this.props.requestQuestions(this.props.category._id);
        }
    }

    renderMoreQuestions(questions, length) {
        return questions.slice(3).map((question, idx) => <QuestionIndexItemContainer key={idx+3+length} question={question} idx={idx+3+length} />);
    }

    handleInput(input) {
        this.setState({[input]: !this.state[input]});
    }

    handleTimeLimit(event) {
        this.setState({ timeLimit: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        let newCategory = Object.assign({}, this.props.category);
        newCategory.timeLimit = this.state.timeLimit;
        this.props.updateCategory(newCategory)
        .then(
            () => document.getElementsByClassName("edit-time")[0].classList.add("invisible")
        );
    }
    
    showForm(event) {
        const editTime = document.getElementsByClassName("edit-time")[0];
        if(editTime.classList.contains("invisible")) {
            editTime.classList.remove("invisible");
        } else {
            editTime.classList.add("invisible");
        }
    }

    renderLoadMore(length, input) {
        if(length > 3) {
            return (
                <div onClick={event => this.handleInput(input)} className="load-more">
                    <h1>Load More</h1>
                </div>  
            );
        }
    }

    toggleSidebar() {
        const sidebar = document.getElementById("sidebar");
        const questionIndex = document.getElementsByClassName("question-index")[0];
        const goalIndex = document.getElementsByClassName("goal-index")[0];
        const sidebarToggleButton = document.getElementById("sidebar-toggle-button");

        // re-style question div
        if (sidebar.style.display === "none") {
            sidebar.style.display = "block";
            questionIndex.style.width = "64%";
            sidebarToggleButton.style.left = "0.2%";
        } else {
            sidebar.style.display = "none";
            questionIndex.style.width = "80%";
            sidebarToggleButton.style.left = "0.2%";
        }
    
  }

    render() {
        const easyQuestionlength = this.props.easyQuestions.length;
        const mediumQuestionlength = this.props.mediumQuestions.length;
        const easyQuestions = Object.values(this.props.questions).filter(question => question.section === "Easy")
        
        return (
            <div className="question-index">
                <button id="sidebar-toggle-button" onClick={this.toggleSidepropsbar}>
                </button>
                <div className="question-title-description-add">
                    <div className="question-title-description">
                        <p className="question-index-title">
                            QUESTIONS
                            <i onClick={this.showForm.bind(this)} className="fa fa-hourglass">
                                <form onSubmit={this.handleSubmit.bind(this)} className="edit-time invisible">
                                    <label htmlFor="edit-time-input">Input the time limit per question for all questions: </label>
                                    <input onClick={event => event.stopPropagation()} onChange={this.handleTimeLimit.bind(this)} type="number" id="edit-time-input" value={this.state.timeLimit} min="0" /><strong> minutes</strong>
                                </form>
                            </i>
                        </p>
                        <p className="question-index-description">{this.props.actualTime} / {this.props.expectedTime} minutes completed</p>
                    </div>
                    <div id="question-add" onClick={() => this.props.addQuestion()}>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" className="svg-inline--fa fa-plus fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>
                    </div>
                </div>
                {/* Refactor to take in all sections */}
                <div id="question-index-container">
                    <div className="question-container">
                        <p className="question-container-title">Easy</p>
                        {
                            easyQuestions.slice(0, 3).map((question, idx) => <QuestionIndexItemContainer key={idx} question={question} idx={idx} />)
                        }
                        {this.state.loadedEasyQuestions ? this.renderMoreQuestions(this.props.easyQuestions, 0) : this.renderLoadMore(this.props.easyQuestions.length, "loadedEasyQuestions")}
                    </div>
                    <div className="question-container">
                        <p className="question-container-title">Medium</p>
                        {
                            this.props.mediumQuestions.slice(0, 3).map((question, idx) => <QuestionIndexItemContainer key={idx + easyQuestionlength} question={question} idx={idx + easyQuestionlength} />)
                        }
                        {this.state.loadedMediumQuestions ? this.renderMoreQuestions(this.props.mediumQuestions, easyQuestionlength) : this.renderLoadMore(this.props.mediumQuestions.length, "loadedMediumQuestions")}
                    </div>
                    <div className="question-container">
                        <p className="question-container-title">Hard</p>
                        {
                            this.props.hardQuestions.slice(0, 3).map((question, idx) => <QuestionIndexItemContainer key={idx + easyQuestionlength + mediumQuestionlength} question={question} idx={idx + easyQuestionlength + mediumQuestionlength} />)
                        }
                        {this.state.loadedHardQuestions ? this.renderMoreQuestions(this.props.hardQuestions, easyQuestionlength + mediumQuestionlength) : this.renderLoadMore(this.props.hardQuestions.length, "loadedHardQuestions")}
                    </div>
                </div>
            </div>
        );
    }
}

export default QuestionIndex;
