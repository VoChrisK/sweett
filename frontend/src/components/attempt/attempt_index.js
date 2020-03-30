import React from 'react';
import AttemptIndexItemContainer from './attempt_index_item_container';
import { withRouter } from 'react-router-dom';

class AttemptIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            task: this.props.task,
        }

    }

    componentDidMount() {
        this.props.requestTaskAttempts(this.props.task._id);
        this.setState({
            task: this.props.task
        })
    }

    componentDidUpdate(preProps) {
        // if(this.props.attempts.length !== preProps.attempts.length) {
        //     this.props.requestTaskAttempts(this.props.task._id);
        // }
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

export default withRouter(AttemptIndex);