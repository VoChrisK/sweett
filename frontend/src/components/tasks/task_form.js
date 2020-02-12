import React from "react";
import { withRouter } from "react-router-dom";

class TaskForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            status: "Incomplete",
            section: "",
            errors: {}
        }
        this.renderErrors = this.renderErrors.bind(this);
    }
    renderErrors() {
        return (
            <ul className="errors">
                {Object.keys(this.state.errors).map((error, i) => (
                    <li key={`error-${i}`}>
                        {this.state.errors[error]}
                    </li>
                ))}
            </ul>
        );
    }

    update(field) {
        return e =>
            this.setState({
                [field]: e.currentTarget.value
            });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ errors: this.props.errors })
        let task = {
            name: this.state.name,
            status: "Incomplete",
            category_id: this.props.location.pathname.split("/")[2],
            section: this.state.section
        };
        console.log(task, 'submit task')
        this.props.processForm(task)
            .then(task => {
                
                if (task.errors) {
                    this.setState({ errors: this.props.errors })
                } else {
                    this.props.closeModal()
                }
            })
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
                        value="1. Easy" 
                        onClick={this.update("section")}
                    />
                    Easy
                </label>
                <label>
                    <input
                        type="radio"
                        name="section"
                        value="2. Medium"
                        onClick={this.update("section")}
                    />
                    Medium
                </label>
                <label>
                    <input
                        type="radio"
                        name="section"
                        value="3. Hard"
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
                <option value="">---</option>
                <option value="1. Chapter 1">Chapter 1</option>
                <option value="2. Chapter 2">Chapter 2</option>
                <option value="3. Chapter 3">Chapter 3</option>
                <option value="4. Chapter 4">Chapter 4</option>
                <option value="5. Chapter 5">Chapter 5</option>
                <option value="6. Chapter 6">Chapter 6</option>
                <option value="7. Chapter 7">Chapter 7</option>
                <option value="8. Chapter 8">Chapter 8</option>
                <option value="9. Chapter 9">Chapter 9</option>
                <option value="10. Chapter 10">Chapter 10</option>
                <option value="11. Chapter 11">Chapter 11</option>
                <option value="12. Chapter 12">Chapter 12</option>
                <option value="13. Chapter 13">Chapter 13</option>
                <option value="14. Chapter 14">Chapter 14</option>
                <option value="15. Chapter 15">Chapter 15</option>
                <option value="16. Chapter 16">Chapter 16</option>
                <option value="17. Chapter 17">Chapter 17</option>
            </select>
        )
    }

    render() {
        console.log(this.state, 'form error state')
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

                    {this.renderErrors()}
                    <input type="submit" className="add-task-submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default withRouter(TaskForm);