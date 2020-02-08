import React from 'react';
import AttemptIndexItemContainer from './attempt_index_item_container';

class AttemptIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            question: this.props.question,
        }

        this.handleDeleteQuestion = this.handleDeleteQuestion.bind(this);
        this.handleEditQuestion = this.handleEditQuestion.bind(this);
        this.updateNote = this.updateNote.bind(this);
        this.updateQuestion = this.updateQuestion.bind(this);
    }

    componentDidMount() {
        console.log("component did mount", "ComponentDidMount")
        this.setState({
            question: this.props.question
        })
    }

    componentDidUpdate(preProps) {
        if(this.props.attempts.length !== preProps.attempts.length) {
            this.props.requestQuestionAttempts(this.props.question._id);
        }
    }

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

    // questionNote() {
    //     // e.preventDefault();
    //     console.log(this.state.question, "this.state.question")
    //     return (
    //         <form className="question-note-form" onSubmit={this.updateQuestion}>
    //             <input onChange={this.updateNote} type="textarea" className="question-note-input" placeholder="Note for question" value={this.state.question.note}/>
    //             <input className="question-note-submit" type="submit" value="SAVE NOTE" />
    //         </form>
    //     );
    // }

    updateQuestion(e) {
        e.preventDefault();
        this.props.updateQuestion(this.state.question)
    }

    updateNote(e) {
        e.preventDefault();
        let newQuestion = Object.assign({}, this.state.question)
        newQuestion.note = e.currentTarget.value;
        this.setState({ question: newQuestion })
    }

    render() {
        if (!this.props.attempts)  return <ul className="attempts-list invisible"></ul>;
        return (
            <ul className="attempts-list invisible">

                {
                    this.props.attempts.map((attempt, idx) => <AttemptIndexItemContainer key={idx} attempt={attempt} idx={idx} />)
                }
                <form className="question-note-form" onSubmit={this.updateQuestion}>
                    <input onChange={this.updateNote} type="textarea" className="question-note-input" placeholder="Note for question" value={this.state.question.note} />
                    <input className="question-note-submit" type="submit" value="SAVE NOTE" />
                </form>

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