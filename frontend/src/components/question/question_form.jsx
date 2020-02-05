import React from "react";
import { withRouter } from "react-router-dom";

class QuestionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            section: "",
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
            section: this.state.section,
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
                    <p>Section</p>
                    {
                        this.props.state.entities.categories[this.state.categoryId].title === "Leetcode" ? (
                            <div className="radio"> 
                                <label>
                                    <input 
                                        type="radio" 
                                        name="section" 
                                        value="Easy" 
                                        onClick={this.update("section")}
                                        defaultChecked={true}
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
                        ) : (
                            <input className="question-name-input" type="text" value={this.state.section} onChange={this.update("section")}/>
                        )
                    }
                    <input id="question-form-submit" type="submit" className="add-question-submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default withRouter(QuestionForm);
