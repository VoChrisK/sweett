import React from 'react';
import { withRouter } from 'react-router-dom';
import { formatTime } from './../../util/formats';
import { urlencoded } from 'body-parser';
import { leetcode_question_titles } from '../../util/leetcode_questions';
import AttemptIndexContainer from './../attempt/attempt_index_container';

class QuestionIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 0,
            isRecording: false,
            title: this.props.question.name
        }

        this.handleRecordButton = this.handleRecordButton.bind(this);
        this.handleStopButton = this.handleStopButton.bind(this);
        this.handlePauseButton = this.handlePauseButton.bind(this);
        this.updateTitle = this.updateTitle.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

    expandQuestion() {
        document.getElementsByClassName("attempts-list")[this.props.idx].classList.toggle("invisible");

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
            this.props.createAttempt({ question_id: this.props.question._id, category_id: this.props.question.category_id, time: this.state.time })
                .then(() => {
                    this.props.recordQuestion(this.props.idx);
                    document.getElementsByClassName("question-stats")[this.props.idx].classList.add("invisible");
                    this.setState({ time: 0 });
                });
        })
        // .then(() => {
        //   this.props.recordQuestion(this.props.idx);
        //   document
        //     .getElementsByClassName("question-stats")
        //     [this.props.idx].classList.add("invisible");
        //   this.setState({ time: 0 });
        // });
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
    if (leetcode_question_titles.includes(this.state.title)) {
      let question = this.props.question;
      question.name = this.state.title;
      this.props.updateQuestion(question);
      const questionEdit = document.getElementsByClassName("question-edit-form")[this.props.idx];
      const questionTitleSubmit = document.getElementsByClassName("question-edit-form-submit")[this.props.idx];
      questionEdit.disabled = true;
      questionEdit.style.backgroundColor = "transparent";
      questionTitleSubmit.style.display = "none";
    } else {
      alert("Plase exatly match the title ex) Two Sum");
    }
    
  }

  editTitleFrom() {
    return(
      <form className="question-title-edit-form" onSubmit={this.handleSubmit}>
        <input type="text" className="question-edit-form" value={this.state.title} onChange={this.updateTitle()} disabled/>
        <input type="submit" name="question-title-submit" value="SAVE TITLE" className="question-edit-form-submit" />
      </form>
    );
  }

    render() {
        return (
            <div className="question-index-item">
                <div className="question">
                    {this.editTitleFrom()}
                    <div className="question-btns">
                        {this.timeTrackerButtons()}
                        <i onClick={this.expandQuestion.bind(this)} id="caret" class="fa fa-caret-down"></i>
                    </div>
                </div>
                <div className="question-stats invisible">
                    <span>New attempt </span>
                    <span>{formatTime(this.state.time)}</span>
                </div>
                
                <AttemptIndexContainer question={this.props.question} idx={this.props.idx}/>
            </div>
        );
    }
};

export default withRouter(QuestionIndexItem);
