import React from 'react';
import { withRouter } from 'react-router-dom'


class Sidebar extends React.Component {

    componentDidMount() {
        console.log(this.props, 'mount state')
        this.props.requestCategories(this.props.currentUserId);
    }

    categories() {
        return (
            <ul id="sidebar-categories">
                {
                    this.props.categories.map((category, i) => 
                        <li onClick={() => this.props.history.push(`${category._id}`)} className="sidebar-category" id={category._id} key={i}>{category.title}</li>)
                }
            </ul>
        );
    }

    render() {
        console.log(this.props, 'render state')
        return (
            <div id="sidebar">
                {this.categories()}
            </div>
        );
    }
}

export default withRouter(Sidebar);
