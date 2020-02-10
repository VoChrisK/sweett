import React from "react";

class TaskForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            status: "Incomplete",
        }
    }

    update(field) {
        return e =>
            this.setState({
                [field]: e.currentTarget.value
            });
    }

    handleSubmit(e) {
        console.log(this.props, 'submit props')
        let tasks = Object.values(this.props.state.entities.tasks)
        e.preventDefault();
        let task = {
            name: this.state.name,
            category_id: tasks[0].category_id
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
                    <input type="submit" className="add-task-submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default TaskForm;