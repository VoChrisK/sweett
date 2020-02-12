import React from "react";

class CategoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      name: "",
      errors: {}
    };
    this.renderErrors = this.renderErrors.bind(this);
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
    let task = {
      name: this.state.name,
      status: "Incomplete",
      category_id: ""
    }
    this.props.processCat(cat)
    .then((category) => 
    {
      if (category.errors.length === 0) {
        this.props.addTask(task);
      }})

      // .then((category) => {task.category_id = category.category.data._id
      //   this.props.addTask(task)
      //       if (this.state.errors.length === 0) {
      //         this.props.closeModal();
      //       }
      // })
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

  render() {
    console.log(this.state, 'cat error state')
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
          <br></br>
          {this.renderErrors()}
          <h3>Tasks:</h3>
          <input
            type="text"
            className="cat-task-input"
            value={this.state.name}
            onChange={this.update("name")}
            placeholder="Task"
          />
          <input type="submit" className="add-cat-submit" value="Submit" />
        </form>
      </div>
    );
  }
}



export default CategoryForm;