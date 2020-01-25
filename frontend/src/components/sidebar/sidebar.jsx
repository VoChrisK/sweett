import React from 'react';
import { withRouter } from 'react-router-dom'


class Sidebar extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.requestCategories(this.props.currentUserId);
    }

    categories() {
        console.log(this.props.categories, "!@#!@#!@#");
        return (
            <ul id="sidebar-categories">
                {
                    this.props.categories.map((category, i) => 
                        <li className="sidebar-category" key={i}>{category.title}</li>)
                }
            </ul>
        );
    }

    render() {
        return (
            <div id="sidebar">
                {this.categories()}
            </div>
        );
    }
}

export default withRouter(Sidebar);