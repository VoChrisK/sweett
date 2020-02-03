<<<<<<< HEAD
import React from "react";
import { withRouter } from "react-router-dom";
import { formatTime } from "./../../util/formats";
import { urlencoded } from "body-parser";
import AttemptIndexContainer from "./../attempt/attempt_index_container";
=======
import React from 'react';
import { withRouter } from 'react-router-dom';
import { formatTime } from './../../util/formats';
import { urlencoded } from 'body-parser';
import AttemptIndexContainer from './../attempt/attempt_index_container';
>>>>>>> e95053322307e7d00c246528ed03e0e10239f53d

class QuestionIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      isRecording: false
    };

    this.handleRecordButton = this.handleRecordButton.bind(this);
    this.handleStopButton = this.handleStopButton.bind(this);
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

<<<<<<< HEAD
  expandQuestion() {
    document
      .getElementsByClassName("attempts-list")[0]
      .classList.remove("invisible");
  }
=======
    expandQuestion() {
        console.log(document.getElementsByClassName("attempts-list"), "@@@");
        document.getElementsByClassName("attempts-list")[this.props.idx].classList.toggle("invisible");

        let caretClassList = document.getElementById("caret").classList;
        console.log(this.props.idx)

        if (caretClassList[0] === "fa-caret-down") {
            caretClassList.remove("fa-caret-down");
            caretClassList.add("fa-caret-up");
        } else {
            caretClassList.remove("fa-caret-up");
            caretClassList.add("fa-caret-down");
        }
    }
>>>>>>> e95053322307e7d00c246528ed03e0e10239f53d

  handleStopButton(e) {
    e.currentTarget.parentElement.parentElement.parentElement.style.height =
      "40px";
    this.setState({ isRecording: false }, () => {
      clearInterval(this.interval);
      this.props
        .createAttempt({
          question_id: this.props.question._id,
          category_id: this.props.question.category_id,
          time: this.state.time
        })
        .then(() => {
          this.props.recordQuestion(this.props.idx);
          document
            .getElementsByClassName("question-stats")
            [this.props.idx].classList.add("invisible");
          this.setState({ time: 0 });
        });
    });
  }

  stopPauseCancelButtons() {
    return (
      <div className="stop-pause-cancel-buttons">
        <button
          className="stop-button"
          onClick={this.handleStopButton}
        ></button>
        <button
          className="pause-button"
          onClick={() => clearInterval(this.interval)}
        ></button>
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

<<<<<<< HEAD
  render() {
    return (
      <div className="question-index-item">
        <div className="question">
          <p>{this.props.question.name}</p>
          <div>
            {this.timeTrackerButtons()}
            <i
              onClick={this.expandQuestion.bind(this)}
              class="fa fa-caret-down"
            ></i>
          </div>
        </div>
        <div className="question-stats invisible">
          <span>Attempts: </span>
          <span>{formatTime(this.state.time)}</span>
        </div>
        <AttemptIndexContainer question={this.props.question} />
      </div>
    );
  }
}
=======
    render() {
        return (
            <div className="question-index-item">
                <div className="question">
                    <a className="question-link" href={`https://leetcode.com/problems/${this.props.question.name.toLowerCase().split(" ").join("-")}`}>
                        {this.props.question.name}
                    </a>
                    <div className="question-btns">
                        {this.timeTrackerButtons()}
                        <i id="caret" onClick={this.expandQuestion.bind(this)} class="fa fa-caret-down"></i>
                    </div>
                </div>
                <div className="question-stats invisible">
                    <span>New attempt: </span>
                    <span>{formatTime(this.state.time)}</span>
                </div>
                
                <AttemptIndexContainer question={this.props.question} />
            </div>
        );
    }
};
>>>>>>> e95053322307e7d00c246528ed03e0e10239f53d

export default withRouter(QuestionIndexItem);
