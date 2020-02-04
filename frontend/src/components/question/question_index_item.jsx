import React from 'react';
import { withRouter } from 'react-router-dom';
import { formatTime } from './../../util/formats';
import { urlencoded } from 'body-parser';
import AttemptIndexContainer from './../attempt/attempt_index_container';


class QuestionIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 0,
            isRecording: false
        }

        this.handleRecordButton = this.handleRecordButton.bind(this);
        this.handleStopButton = this.handleStopButton.bind(this);
    }

    handleRecordButton(e) {
        this.setState({ isRecording: true }, () => {
            document.getElementsByClassName("question-stats")[this.props.idx].classList.remove("invisible");
            this.recordTime();
        });
    }

    recordButton() {
        return (
            <button className="record-button" onClick={this.handleRecordButton}>

            </button>
        );
    }

    expandQuestion() {
        document.getElementsByClassName("attempts-list")[0].classList.remove("invisible");
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
    }

    stopPauseCancelButtons() {
        return (
            <div className="stop-pause-cancel-buttons">
                <button className="stop-button" onClick={this.handleStopButton}></button>
                <button className="pause-button" onClick={() => clearInterval(this.interval)}></button>
            </div>
        );
    }

    timeTrackerButtons() {
        const buttons = this.state.isRecording ? this.stopPauseCancelButtons() : this.recordButton()

        return (
            <div className="time-track-buttons">
                {buttons}
            </div>
        );
    }

    recordTime() {
        this.interval = setInterval(() => {
            this.setState({ time: this.state.time + 1});
        }, 1000);
    }

    render() {
        return (
            <div className="question-index-item">
                <div className="question">
                    <p>question title</p>
                    <div>
                        {this.timeTrackerButtons()}
                        <i onClick={this.expandQuestion.bind(this)} className="fa fa-caret-down"></i>
                    </div>
                    
                </div>
                <div className="question-stats invisible">
                    <h1>Attempts: </h1>
                    <h1>{formatTime(this.state.time)}</h1>
                </div>
                <AttemptIndexContainer question={this.props.question} />
            </div>
        );
    }
};

export default withRouter(QuestionIndexItem);