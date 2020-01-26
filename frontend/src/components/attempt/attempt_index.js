import React from 'react';

class AttemptIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.requestQuestionAttempts(this.props.question._id);
    }

    componentDidUpdate(preProps) {
        if(this.props.attempts.length !== preProps.attempts.length) {
            this.props.requestQuestionAttempts(this.props.question._id);
        }
    }

    render() {
        if(this.props.attempts.length === 0) return null;

        return (
            <ul className="attempts-list">
                {
                    this.props.attempts.map((attempt, idx) => <AttemptIndexItemContainer key={idx} attempt={attempt} idx={idx} />)
                }
            </ul>
        );
    }
}

export default AttemptIndex;