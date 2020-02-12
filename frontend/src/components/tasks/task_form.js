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
                <option value="Chapter 1">Chapter 1</option>
                <option value="Chapter 2">Chapter 2</option>
                <option value="Chapter 3">Chapter 3</option>
                <option value="Chapter 4">Chapter 4</option>
                <option value="Chapter 5">Chapter 5</option>
                <option value="Chapter 6">Chapter 6</option>
                <option value="Chapter 7">Chapter 7</option>
                <option value="Chapter 8">Chapter 8</option>
                <option value="Chapter 9">Chapter 9</option>
                <option value="Chapter 10">Chapter 10</option>
                <option value="Chapter 11">Chapter 11</option>
                <option value="Chapter 12">Chapter 12</option>
                <option value="Chapter 13">Chapter 13</option>
                <option value="Chapter 14">Chapter 14</option>
                <option value="Chapter 15">Chapter 15</option>
                <option value="Chapter 16">Chapter 16</option>
                <option value="Chapter 17">Chapter 17</option>
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
                    { this.props.category.title === "Leetcode" ? this.renderLeetCodeSections() : this.props.category.title === "Cracking The Coding Interview" ? this.renderCTCISections() : this.renderSections() }
                    <input type="submit" className="add-task-submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default withRouter(TaskForm);