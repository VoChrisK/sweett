import React from 'react';
import AttemptIndexItemContainer from './attempt_index_item_container';

class AttemptIndex extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        if (!this.props.attempts)  return <ul className="attempts-list invisible"></ul>;

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