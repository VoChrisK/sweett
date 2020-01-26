import React from 'react';
import AttemptIndex from './../attempt/attempt_index';
import { withRouter } from 'react-router-dom';
import { urlencoded } from 'body-parser';

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
        this.setState({ isRecording: true });
        // this.recordTime();
    }

    recordButton() {
        return (
            <button className="record-button" onClick={this.handleRecordButton}>

            </button>
        );
    }

    handleStopButton(e) {
        this.setState({ isRecording: false });
    }

    stopPauseCancelButtons() {
        return (
            <div className="stop-pause-cancel-buttons">
                <button className="stop-button" onClick={this.handleStopButton}></button>
                <button className="pause-button"></button>
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
        setInterval(() => {
            const { isRecording, time } = this.state;

            if(!isRecording) {
                this.setState({ time: time + 1});
            } else {
                this.props.createAttempt({ question_id: this.props.question._id, category_id: this.props.match.params.categoryId, time: this.state.time })
                .then(() => {
                    this.props.recordQuestion(this.props.idx)
                    .then(() => {
                        clearInterval();
                        this.setState({ time: 0 });
                    })}
                );
            }
        }, 1000);
    }

    render() {
        return (
            <div className="question-index-item">
                <p>question title</p>
                {this.timeTrackerButtons()}

                {/* <AttemptIndex question={this.props.question} /> */}
            </div>
        );
    }
};

export default withRouter(QuestionIndexItem);