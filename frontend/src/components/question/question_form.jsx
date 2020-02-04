import React from "react";
import { withRouter } from "react-router-dom";

class QuestionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            difficulty: "Easy",
            categoryId: this.props.location.pathname.slice(12)
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
            status: "Incomplete",
            category_id: this.state.categoryId,
            time: 45
        };

        this.props.processForm(question).then(this.props.closeModal);
    }

    render() {
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
                                value="Easy" 
                                onClick={this.update("difficulty")}
                                defaultChecked={true}
                            />
                            Easy
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="difficulty"
                                value="Medium"
                                onClick={this.update("difficulty")}
                            />
                            Medium
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="difficulty"
                                value="Hard"
                                onClick={this.update("difficulty")}
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

export default withRouter(QuestionForm);
