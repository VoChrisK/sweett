import React from "react";
import { withRouter } from "react-router-dom";

class QuestionForm extends React.Component {
    constructor(props) {
        super(props);
        console.log(props, 'constructor props')
        this.state = {
            name: "",
            difficulty: "",
            // categoryId: this.props.match.params.categoryId
            // categoryId: this.props.location.pathname.slice(12,-1)
        };
    }

    update(field) {
        return e =>
            this.setState({
                [field]: e.currentTarget.value
            });
    }

    handleSubmit(e) {
        e.preventDefault();
        let question = {
            name: this.state.name,
            difficulty: this.state.difficulty,
            category_id: this.state.categoryId
        };

        console.log(question, "!@#!@#!@#")
        this.props.processForm(question).then(this.props.closeModal);
    }

    render() {
        console.log(this.props, 'question props')
        return (
            <div className="question-form-container">
                <form className="question-form" onSubmit={this.handleSubmit.bind(this)}>
                    <p id="question-form-title">Add a question</p>
                    <p>Name</p>
                    <input
                        id="question-form-name"
                        type="text"
                        className="question-name-input"
                        autoFocus="autofocus"
                        value={this.state.name}
                        onChange={this.update("name")}
                        placeholder="ex) Two sum"
                    />
                    <p>Difficulty</p>
                    <div className="radio"> 
                        <label>
                            <input 
                                type="radio" 
                                name="difficulty" 
                                value="easy" 
                                onChange={this.update("difficulty")}
                                defaultChecked={true}
                            />
                            Easy
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="difficulty"
                                value="medium"
                                onChange={this.update("difficulty")}
                            />
                            Medium
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="difficulty"
                                value="hard"
                                onChange={this.update("difficulty")}
                            />
                            Hard
                        </label>
                    </div>
                    <input id="question-form-submit" type="submit" className="add-question-submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default QuestionForm;