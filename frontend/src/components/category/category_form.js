import React from "react";
import { withRouter } from "react-router-dom";

class CategoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
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
    let cat = {
      title: this.state.title
    };
    this.props.processForm(cat).then(this.props.closeModal);
  }

  render() {
    return (
      <div className="cat-modal">
        <form className="cat-form" onSubmit={this.handleSubmit.bind(this)}>
          <h1>Add a Category</h1>
          <h3>Title:</h3>
          <input
            type="text"
            className="cat-title-input"
            autoFocus="autofocus"
            value={this.state.title}
            onChange={this.update("title")}
            placeholder="Title"
          />
          <h3>Placeholder</h3>
          <input type="submit" className="add-cat-submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default CategoryForm;