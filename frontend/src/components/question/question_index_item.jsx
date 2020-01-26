import React from 'react';

class QuestionIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    timeTrackerButtons() {

        return (
            <button className="record-button"></button>
        );
    }

    render() {
        return (
            <div className="question-index-item">
                <p>question title</p>
                {this.timeTrackerButtons()}
            </div>
        );
    }
};

export default QuestionIndexItem;