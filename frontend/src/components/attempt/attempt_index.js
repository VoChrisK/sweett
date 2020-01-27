import React from 'react';
import AttemptIndexItemContainer from './attempt_index_item_container';

class AttemptIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.requestQuestionAttempts(this.props.question._id);
    }

    // componentDidUpdate(preProps) {
    //     if(this.props.attempts.length !== preProps.attempts.length) {
    //         console.log(this.props.attempts.length);
    //         this.props.requestQuestionAttempts(this.props.question._id);
    //     }
    // }

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