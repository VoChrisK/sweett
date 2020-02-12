import React from "react";
import { withRouter } from "react-router-dom";

class TaskForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            status: "Incomplete",
            section: ""
        }
    }

    update(field) {
        return e =>
            this.setState({
                [field]: e.currentTarget.value
            });
    }

    handleSubmit(e) {
        e.preventDefault();
        let task = {
            name: this.state.name,
            status: "Incomplete",
            category_id: this.props.location.pathname.split("/")[2],
            section: this.state.section
        };
        this.props.processForm(task).then(this.props.closeModal);
    }

    renderSections() {
        return (
            <input
                type="text"
                className="task-name-input"
                value={this.state.section}
                onChange={this.update("section")}
                placeholder="Section"
            />
        )
    }

    renderLeetCodeSections() {
        return (
            <div className="radio"> 
                <label>
                    <input 
                        type="radio" 
                        name="section" 
                        value="Easy" 
                        onClick={this.update("section")}
                    />
                    Easy
                </label>
                <label>
                    <input
                        type="radio"
                        name="section"
                        value="Medium"
                        onClick={this.update("section")}
                    />
                    Medium
                </label>
                <label>
                    <input
                        type="radio"
                        name="section"
                        value="Hard"
                        onClick={this.update("section")}
                    />
                    Hard
                </label>
            </div>
        );
    }

    renderCTCISections() {
        return (
            <select className="dropdown-list" onChange={this.update("section")}>
                <option value="chapter-1">Chapter 1</option>
                <option value="chapter-">Chapter 2</option>
                <option value="chapter-">Chapter 3</option>
                <option value="chapter-">Chapter 4</option>
                <option value="chapter-">Chapter 5</option>
                <option value="chapter-">Chapter 6</option>
                <option value="chapter-">Chapter 7</option>
                <option value="chapter-">Chapter 8</option>
                <option value="chapter-">Chapter 9</option>
                <option value="chapter-">Chapter 10</option>
                <option value="chapter-">Chapter 11</option>
                <option value="chapter-">Chapter 12</option>
                <option value="chapter-">Chapter 13</option>
                <option value="chapter-">Chapter 14</option>
                <option value="chapter-">Chapter 15</option>
                <option value="chapter-">Chapter 16</option>
            </select>
        )
    }

    render() {
        return (
            <div className="task-modal">
                <form className="task-form" onSubmit={this.handleSubmit.bind(this)}>
                    <h1>Add a Task</h1>
                    <h3>Name:</h3>
                    <input
                        type="text"
                        className="task-name-input"
                        autoFocus="autofocus"
                        value={this.state.name}
                        onChange={this.update("name")}
                        placeholder="Name"
                    />
                    <h3>Section:</h3>
                    { this.props.category.title === "Leetcode" ? this.renderLeetCodeSections() : this.renderSections() }
                    <input type="submit" className="add-task-submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default withRouter(TaskForm);