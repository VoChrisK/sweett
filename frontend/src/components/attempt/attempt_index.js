import React from 'react';
import AttemptIndexItemContainer from './attempt_index_item_container';

class AttemptIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            question: props.question,
            note: props.question.note
        }

        this.handleDeleteQuestion = this.handleDeleteQuestion.bind(this);
        this.handleEditQuestion = this.handleEditQuestion.bind(this);
        this.updateNote = this.updateNote.bind(this);
    }


    // componentDidUpdate(preProps) {
    //     if(this.props.attempts.length !== preProps.attempts.length) {
    //         console.log(this.props.attempts.length);
    //         this.props.requestQuestionAttempts(this.props.question._id);
    //     }
    // }

    handleDeleteQuestion(e) {
        this.props.deleteQuestion(this.props.question._id);
    }

    handleEditQuestion(e) {
        const questionEdit = document.getElementsByClassName("question-edit-form")[this.props.idx];
        const questionTitleSubmit = document.getElementsByClassName("question-edit-form-submit")[this.props.idx];
        // able
        if (questionEdit.disabled) {
            questionEdit.disabled = false;
            questionEdit.style.backgroundColor = "lightgrey";
            questionTitleSubmit.style.display = "block";
        } 
        // disable
        else {
            questionEdit.disabled = true;
            questionEdit.style.backgroundColor = "transparent";
            questionTitleSubmit.style.display = "none";
        }
    }

    questionNote() {
        return (
            <div className="question-note-form">
                <textarea onChange={this.updateNote} rows="5" className="question-note-input" placeholder="Note for question" />
            </div>
        );
    }

    updateNote(e) {
            this.setState({
                note: e.currentTarget.value
            })
            // .then(() => {
                
            // });
        let newQuestion = this.state.question;
        newQuestion.note = this.state.note;
        this.props.updateQuestion(newQuestion);
    }

    render() {
        if (!this.props.attempts)  return <ul className="attempts-list invisible"></ul>;

        return (
            <ul className="attempts-list invisible">

                {
                    this.props.attempts.map((attempt, idx) => <AttemptIndexItemContainer key={idx} attempt={attempt} idx={idx} />)
                }
                {this.questionNote()}

                <div className="question-delete-container">   
                    <button id="question-edit-btn" className="question-edit" onClick={this.handleEditQuestion}>EDIT TITLE</button>
                    <a className="question-link" href={`https://leetcode.com/problems/${this.props.question.name.toLowerCase().split(" ").join("-")}`}>
                        LEETCODE
                    </a>
                    <button className="question-delete" onClick={this.handleDeleteQuestion}>DELETE QUESTION</button>
                </div>
            </ul>
        );
    }
}

export default AttemptIndex;