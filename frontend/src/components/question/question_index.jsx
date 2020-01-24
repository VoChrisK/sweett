import React from 'react';
import { withRouter } from 'react-router-dom'
import QuestionIndexItem from './question_index_item';



class QuestionIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    toggleSidebar() {
    }

    render() {
        return (
            <div className="question-index">
                <button id="sidebar-toggle-button" onClick={this.toggleSidebar}>Toggle Sidebar</button>
                <p>Questions</p>
                <QuestionIndexItem />
            </div>
        );
    }
}

export default withRouter(QuestionIndex);