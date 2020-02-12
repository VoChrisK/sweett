import React from 'react';
import AttemptIndexItemContainer from './attempt_index_item_container';
import { leetcode_question_titles } from '../../util/leetcode_questions';

class AttemptIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            task: this.props.task,
        }

        this.handleDeleteTask = this.handleDeleteTask.bind(this);
        this.handleEditTask = this.handleEditTask.bind(this);
        this.updateNote = this.updateNote.bind(this);
        this.updateTask = this.updateTask.bind(this);
    }

    componentDidMount() {
        this.props.requestTaskAttempts(this.props.task._id);
        this.setState({
            task: this.props.task
        })
    }

    componentDidUpdate(preProps) {
        // if(this.props.attempts.length !== preProps.attempts.length) {
        //     this.props.requestTaskAttempts(this.props.task._id);
        // }
    }

    handleDeleteTask(e) {
        this.props.deleteTask(this.props.task._id);
    }

    handleEditTask(e) {
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

    validateTaskName() {
        if (leetcode_question_titles.includes(this.state.task.name)) {
            return true;
        } else {
            return false;
        }
    }

    updateTask(e) {
        e.preventDefault();
        this.props.updateTask(this.state.task);
    }

    questionNote() {
        // e.preventDefault();
        return (
            <form className="question-note-form" onSubmit={this.updateNote}>
                <input type="textarea" className="question-note-input" placeholder="Note for question" />
                <input className="question-note-submit" type="submit" value="SAVE NOTE" />
            </form>
        );
    }

    updateNote(e) {
        e.preventDefault();
        let newTask = Object.assign({}, this.state.question)
        newTask.note = e.currentTarget.value;
        this.setState({ task: newTask })
    }
    
    render() {
        if (!this.props.attempts)  return <ul className="attempts-list invisible"></ul>;

        return (
            <ul className="attempts-list invisible">

                {
                    this.props.attempts.map((attempt, idx) => <AttemptIndexItemContainer key={idx} attempt={attempt} idx={idx} />)
                }
                <form className="question-note-form" onSubmit={this.updateTask}>
                    <input onChange={this.updateNote} type="textarea" className="question-note-input" placeholder="Note for question" value={this.state.task.note} />
                    <input className="question-note-submit" type="submit" value="SAVE NOTE" />
                </form>

                <div className="question-delete-container">   
                    <button id="question-edit-btn" className="question-edit" onClick={this.handleEditTask}>EDIT TITLE</button>
                    { this.validateTaskName() ? <a className="question-link" rel="noopener noreferrer" target="_blank" href={`https://leetcode.com/problems/${this.props.task.name.toLowerCase().split(" ").join("-")}`}>LEETCODE</a> : null}
                    <button className="question-delete" onClick={this.handleDeleteTask}>DELETE TASK</button>
                </div>
            </ul>
        );
    }
}

export default AttemptIndex;