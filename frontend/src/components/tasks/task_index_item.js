import React from 'react';
import { withRouter } from 'react-router-dom';
import { formatTime } from './../../util/formats';
import AttemptIndexContainer from './../attempt/attempt_index_container';
import { leetcode_question_titles } from '../../util/leetcode_questions';

class TaskIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task: this.props.task,
            time: 0,
            isRecording: false,
            title: this.props.task.name,
        }

        this.handleRecordButton = this.handleRecordButton.bind(this);
        this.handleStopButton = this.handleStopButton.bind(this);
        this.handlePauseButton = this.handlePauseButton.bind(this);
        this.updateTitle = this.updateTitle.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateTask = this.updateTask.bind(this);
        this.updateNote = this.updateNote.bind(this);
        this.handleEditTask = this.handleEditTask.bind(this);
        this.validateTaskName = this.validateTaskName.bind(this);
        this.handleDeleteTask = this.handleDeleteTask.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (this.props.task.name !== prevProps.task.name) {
            this.setState({task: this.props.task, title: this.props.task.name });
        }
    }

    handleRecordButton(e) {
        this.setState({ isRecording: true }, () => {
            document
                .getElementsByClassName("question-stats")
            [this.props.idx].classList.remove("invisible");
            this.recordTime();
        });
    }

    recordButton() {
        return (
            <button
                className="record-button"
                onClick={this.handleRecordButton}
            ></button>
        );
    }

    expandTask() {
        document.getElementsByClassName("attempts-list")[this.props.idx].classList.toggle("invisible");
        document.getElementsByClassName("question-note-form")[this.props.idx].classList.toggle("invisible");
        document.getElementsByClassName("question-delete-container")[this.props.idx].classList.toggle("invisible");
        if (document.getElementById(`task-${this.props.task._id}`)) {
            document.getElementById(`task-${this.props.task._id}`).style.animation = "none";
        }

        let caretClassList = document.getElementById("caret").classList;

        if (caretClassList[1] === "fa-caret-down") {
            caretClassList.remove("fa-caret-down");
            caretClassList.add("fa-caret-up");
        } else {
            caretClassList.remove("fa-caret-up");
            caretClassList.add("fa-caret-down");
        }
    }

    handlePauseButton(e) {
        // when pause button shown 
        if (e.currentTarget.classList.length === 1) {
            clearInterval(this.interval);
        }
        // when play button shown
        else {
            this.recordTime();
        }

        // change icons
        e.currentTarget.classList.toggle("play-button");
    }

    handleStopButton(e) {
        e.currentTarget.parentElement.parentElement.parentElement.style.height = "40px";
        this.setState({ isRecording: false }, () => {
            clearInterval(this.interval);
            this.props.createAttempt({ task_id: this.props.task._id, category_id: this.props.task.category_id, time: this.state.time })
                .then(() => {
                    this.props.recordTask(this.props.idx);
                    document.getElementsByClassName("question-stats")[this.props.idx].classList.add("invisible");
                    this.setState({ time: 0 });
                    this.props.addEntry();
                });
        })
    };


    stopPauseCancelButtons() {
        return (
            <div className="stop-pause-cancel-buttons">
                <button className="stop-button" onClick={this.handleStopButton}></button>
                <button className="pause-button" onClick={this.handlePauseButton}></button>
            </div>
        );
    }

    timeTrackerButtons() {
        const buttons = this.state.isRecording
            ? this.stopPauseCancelButtons()
            : this.recordButton();

        return <div className="time-track-buttons">{buttons}</div>;
    }

    recordTime() {
        this.interval = setInterval(() => {
            this.setState({ time: this.state.time + 1 });
        }, 1000);
    }

    updateTitle() {
        return e => this.setState({
            title: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let task = Object.assign({}, this.state.task);
        task.name = this.state.title;
        this.props.updateTask(task);
        const taskEdit = document.getElementsByClassName("question-edit-form")[this.props.idx];
        const taskTitleSubmit = document.getElementsByClassName("question-edit-form-submit")[this.props.idx];
        taskEdit.disabled = true;
        taskEdit.style.backgroundColor = "transparent";
        taskTitleSubmit.style.display = "none";
    }

    editTitleFrom() {
        return (
            <form className="question-title-edit-form" onSubmit={this.handleSubmit}>
                <input type="text" className="question-edit-form" value={this.state.title} onChange={this.updateTitle()} disabled />
                <input type="submit" name="question-title-submit" value="SAVE TITLE" className="question-edit-form-submit" />
            </form>
        );
    }

    updateTask(e) {
        e.preventDefault();
        this.props.updateTask(this.state.task);
        document.getElementById(`task-${this.state.task._id}`).style.animation = "none"
        setTimeout(() => {
            document.getElementById(`task-${this.state.task._id}`).style.animation = "fadeOut 3s"
        }, 10)
    }

    updateNote(e) {
        e.preventDefault();
        let newTask = Object.assign({}, this.state.task)
        newTask.note = e.currentTarget.value;
        this.setState({ task: newTask })
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


    handleDeleteTask(e) {
        this.props.deleteTask(this.props.task._id);
    }

    render() {
        return (
            <div className="question-index-item">
                <div className="question">
                    {this.editTitleFrom()}
                    <div className="question-btns">
                        {this.timeTrackerButtons()}
                        <i onClick={this.expandTask.bind(this)} id="caret" className="fa fa-caret-down"></i>
                    </div>
                </div>
                <div className="question-stats invisible">
                    <span>New attempt </span>
                    <span>{formatTime(this.state.time)}</span>
                </div>

                {<AttemptIndexContainer note={this.state.task.note} task={this.props.task} idx={this.props.idx} />}
                <form className="question-note-form invisible" onSubmit={this.updateTask}>
                    <div className="question-note-form-row">
                        <input onChange={this.updateNote} type="textarea" className="question-note-input" placeholder="Note for question" value={this.state.task.note} />
                        <input className="question-note-submit" type="submit" value="SAVE NOTE" />
                    </div>
                    <div id={`task-${this.state.task._id}`} className="question-note-saved hidden">Note Saved</div>
                </form>

                <div className="question-delete-container invisible">
                    <button id="question-edit-btn" className="question-edit" onClick={this.handleEditTask}>EDIT TITLE</button>
                    {this.validateTaskName() ? <a className="question-link" rel="noopener noreferrer" target="_blank" href={`https://leetcode.com/problems/${this.props.task.name.toLowerCase().split(" ").join("-")}`}>LEETCODE</a> : null}
                    <button className="question-delete" onClick={this.handleDeleteTask}>DELETE TASK</button>
                </div>
            </div>
        );
    }
};

export default withRouter(TaskIndexItem);
