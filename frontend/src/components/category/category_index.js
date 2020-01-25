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

    if (this.props.categories.length >= 12) {

        document.getElementsByClassName("plus-box")[0].style.visibility ="hidden";
    }

  }

  addPlusIcon() {

    let addBox;

    if (this.props.categories.length > 11) {
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

  // addEcks(category) {
  //   library.add(fas);
  //   const ecks = findIconDefinition({
  //     prefix: "fas",
  //     iconName: "times-circle"
  //   });
  //   const ecksButton = icon(ecks);
  //   category.append(ecksButton)
  // }

  componentDidMount() {
    this.props.requestCategories(this.props.currentUserId).then(() => {
      library.add(fas);
      const plus = findIconDefinition({
        prefix: "fas",
        iconName: "plus-circle"
      });
      const ecks = findIconDefinition({
        prefix: "fas",
        iconName: "times-circle"
      });
      const plusIcon = icon(plus);
      const ecksButton = icon(ecks);
      if (
        this.props.categories.length > 0 &&
        this.props.categories.length < 32
      ) {
        Array.from(plusIcon.node).map(n =>
          document.getElementsByClassName("plus-sign")[0].appendChild(n)
        );
      }

      // let categories = Array.from(document.getElementsByClassName("category"));
      // categories.forEach(this.addEcks)
    })
    
  }

  deleteCat(e) {
    e.preventDefault();
    this.props.delCat(this.props.categories[e.target.id]._id).then(() => {

      this.forceUpdate();
    })
    // this.props.delCat(this.props.categories.findIndex(category => category._id === e.target.id))
  }

  render() {
    if (this.props.categories.length === 0) return null;
    //onClick={this.deleteCat.bind(this)}
    return (
      
      <div className="catIndex">
        {this.props.categories.map((category, idx) => (
          <div className="cat-body">
            <div className="cat-header" id={idx}>
              stop
            </div>
            <CategoryIndexItem
              key={idx}
              category={category}
              idx={idx}
            />
          </div>
        ))}
        {/* <i class="fas fa-times-circle"></i> */}
        {/* <div className="plus-box">
          <div onClick={this.props.addCat} className="plus-sign"></div>
        </div> */}
        {this.addPlusIcon()}

      </div>
    );
  }
}

export default CategoryIndex;