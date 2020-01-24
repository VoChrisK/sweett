import React from 'react';
import CategoryIndexItem from './category_index_item';
import {
    library,
    icon,
    findIconDefinition
} from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

class CategoryIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.categories.length !== this.props.categories.length) {
      this.props.requestCategories(this.props.currentUserId);
    }
    if (this.props.categories.length >= 27) {
        document.getElementsByClassName("plus-box")[0].style.visibility ="hidden";
    }

  }

  idontwantanotherfunction() {

    let addBox;

    if (this.props.categories.length > 29) {
      addBox = null;
    } else {
      addBox = (
        <div className="plus-box">
          <div onClick={this.props.addCat} className="plus-sign"></div>
        </div>
      );
    }
    return addBox;
  }

  componentDidMount() {
    console.log(this.props.currentUserId);
    this.props.requestCategories(this.props.currentUserId).then(() => {
      library.add(fas);
      const plus = findIconDefinition({
        prefix: "fas",
        iconName: "plus-circle"
      });
      const plusIcon = icon(plus);
      if (this.props.categories.length > 0 && this.props.categories.length < 29) {
        Array.from(plusIcon.node).map(n =>
          document.getElementsByClassName("plus-sign")[0].appendChild(n)
        );
        }
    })
  }

  render() {
    if (this.props.categories.length === 0) return null;

    return (
      <div className="catIndex">
        {this.props.categories.map((category, idx) => (
          <CategoryIndexItem key={idx} category={category} idx={idx} />
        ))}
        <div className="plus-box">
          <div onClick={this.props.addCat} className="plus-sign"></div>
        </div>
        {this.idontwantanotherfunction()}
      </div>
    );
  }
}

export default CategoryIndex;