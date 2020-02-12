import React from "react";
import { withRouter } from "react-router-dom";

class EntryForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ""
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

    }

    render() {
        return (
            <div className="entry-modal">
                <form className="entry-form" onSubmit={this.handleSubmit.bind(this)}>
                    <h3>Entry Name:</h3>
                    <input
                        type="text"
                        className="entry-name-input"
                        autoFocus="autofocus"
                        value={this.state.name}
                        onChange={this.update("name")}
                        placeholder="Name"
                    />
                    <input type="submit" className="add-entry-submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default withRouter(EntryForm);