import React from 'react';
import AttemptIndexItemContainer from './attempt_index_item_container';

class AttemptIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.requestQuestionAttempts(this.props.question._id);
    }

    componentDidUpdate(prevProps) {
        if((this.props.attempts.length !== prevProps.attempts.length) && (this.props.question._id === prevProps.question._id)) {
            // this.props.requestQuestionAttempts(this.props.question._id);
            console.log(this.props, 'props length')
            console.log(prevProps, 'pre props');
        }
    }

    render() {
        if(this.props.attempts.length === 0) return null;
        return (
            <ul className="attempts-list invisible">
                {
                    this.props.attempts.map((attempt, idx) => <AttemptIndexItemContainer key={idx} attempt={attempt} idx={idx} />)
                }
            </ul>
        );
    }
}

export default AttemptIndex;