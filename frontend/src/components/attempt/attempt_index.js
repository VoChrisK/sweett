import React from 'react';
import AttemptIndexItemContainer from './attempt_index_item_container';

class AttemptIndex extends React.Component {
    constructor(props) {
        super(props);

        this.handleDeleteQuestion = this.handleDeleteQuestion.bind(this);
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

    render() {
        if (!this.props.attempts)  return <ul className="attempts-list invisible"></ul>;

        return (
            <ul className="attempts-list invisible">
                {
                    this.props.attempts.map((attempt, idx) => <AttemptIndexItemContainer key={idx} attempt={attempt} idx={idx} />)
                }
                <div className="question-delete-container">
                    <button className="question-delete" onClick={this.handleDeleteQuestion}>DELETE QUESTION</button>
                </div>
            </ul>
        );
    }
}

export default AttemptIndex;