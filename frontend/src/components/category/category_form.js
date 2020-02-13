import React from "react";

class CategoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      taskName: "",
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

  // handleSubmit(e) {
  //   e.preventDefault();
  //   let cat = {
  //     title: this.state.title
  //   };
  //   let task = {
  //     name: this.state.name,
  //     status: "Incomplete",
  //     category_id: ""
  //   }
  //   this.props.processCat(cat)
  //   .then((category) => 
  //   {
  //     console.log(category, 'category')
  //     if (category.errors.length === 0) {
  //       this.props.addTask(task);
  //     } else { this.setState({ errors: this.props.errors })}})

  //     // .then((category) => {task.category_id = category.category.data._id
  //     //   this.props.addTask(task)
  //     //       if (this.state.errors.length === 0) {
  //     //         this.props.closeModal();
  //     //       }
  //     // })
  //   }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ errors: this.props.errors })
    let cat = {
      title: this.state.title,
      taskName: this.state.taskName
    };
    this.props.processCat(cat)
      .then(category => {
        if (category.errors) {
          this.setState({ errors: this.props.errors })
        } else {
          this.props.closeModal()
        }
      })
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
          <h3>Task Name:</h3>
          <input
            type="text"
            className="task-title-input"
            value={this.state.taskName}
            onChange={this.update("taskName")}
            placeholder="Title"
          />
          {this.renderErrors()}
          <br></br>
          <input type="submit" className="add-cat-submit" value="Submit" />
        </form>
      </div>
    );
  }
}



export default CategoryForm;