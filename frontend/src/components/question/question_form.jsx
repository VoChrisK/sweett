import React from "react";
import { withRouter } from "react-router-dom";

class QuestionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      difficulty: "Easy",
      categoryId: this.props.location.pathname.slice(12, -1)
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

<<<<<<< HEAD
      category_id: this.state.categoryId
    };
=======
        this.props.processForm(question).then(this.props.closeModal);
    }
>>>>>>> e95053322307e7d00c246528ed03e0e10239f53d

    console.log(question, "!@#!@#!@#");
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
                onChange={this.update("difficulty")}
                defaultChecked={true}
              />
              Easy
            </label>
            <label>
              <input
                type="radio"
                name="difficulty"
                value="Medium"
                onChange={this.update("difficulty")}
              />
              Medium
            </label>
            <label>
              <input
                type="radio"
                name="difficulty"
                value="Hard"
                onChange={this.update("difficulty")}
              />
              Hard
            </label>
          </div>
          <input
            id="question-form-submit"
            type="submit"
            className="add-question-submit"
            value="Submit"
          />
        </form>
      </div>
    );
  }
}

export default withRouter(QuestionForm);
