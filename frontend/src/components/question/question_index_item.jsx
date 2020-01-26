import React from 'react';
import AttemptIndex from './../attempt/attempt_index';
import { withRouter } from 'react-router-dom';

class QuestionIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 0,
            isRecording: false
        }
    }

    timeTrackerButtons() {
        return (
            <button className="record-button" onClick={() => {
                this.setState({isRecording: true});
                this.recordTime();
            }}></button>
        );
    }

    recordTime() {
        setInterval(() => {
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

                <AttemptIndex question={this.props.question} />
            </div>
        );
    }
};

export default withRouter(QuestionIndexItem);