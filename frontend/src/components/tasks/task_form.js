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
                    <input
                        type="text"
                        className="task-name-input"
                        value={this.state.section}
                        onChange={this.update("section")}
                        placeholder="Section"
                    />
                    <input type="submit" className="add-task-submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default withRouter(TaskForm);