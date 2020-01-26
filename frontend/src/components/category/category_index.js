import React from 'react';
import { Link } from 'react-router-dom';
import CategoryIndexItem from './category_index_item';
import {
    library,
    icon,
    findIconDefinition
} from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
// import { Icon } from "react-icons-kit";
// import { timesCircle } from "react-icons-kit/fa/timesCircle";

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
    console.log(e.target.id)
    
    // console.log(this.props.categories[e.target.id]._id, 'id');
    if (e.target.id > 0) {
      this.props.delCat(this.props.categories[e.target.id]._id).then(() => {
        this.forceUpdate();
      });
    }

    // this.props.delCat(this.props.categories.findIndex(category => category._id === e.target.id))
  }

  // editCatModal(e) {
  //   console.log(this.props.categories[e.target.id], 'edit cat');

  //   e.preventDefault();
  //   this.props.editCat(this.props.categories[e.target.id]);
  // }

  updateCat(e) {
    // console.log(`num${e.target.id}`);
    let editText = document.getElementById(`num${e.target.id}`)
    editText.style.visibility = "visible"
  }

  

  render() {
    if (this.props.categories.length === 0) return null;

    return (
      <div className="catIndex">
        {this.props.categories.map((category, idx) => (
          <Link key={idx} to={`/categories/${category._id}`} id={`cat${idx + 1}`} className="cat-body">
            <div className="header-format">
              <div
                className="cat-header"
                id={idx}
                // onClick={this.deleteCat.bind(this)}
              >
                <div
                  className="x-box"
                  id={idx}
                  onClick={this.deleteCat.bind(this)}
                ></div>
              </div>

            </div>
            <CategoryIndexItem key={idx} category={category} idx={idx} />
          </Link>
        ))}
        {this.addPlusIcon()}
      </div>
    );
  }
}

export default CategoryIndex;