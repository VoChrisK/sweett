import React from 'react';
import { Link } from 'react-router-dom';
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

    if (this.props.categories.length > 12) {
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

    })
    
  }

  deleteCat(e) {
    e.preventDefault();
    
    if (e.target.id > 0) {
      this.props.delCat(this.props.categories[e.target.id]._id).then(() => {
        this.forceUpdate();
      });
    }

  }


  updateCat(e) {
    let editText = document.getElementById(`num${e.target.id}`)
    editText.style.visibility = "visible"
  }

  

  render() {
    if (this.props.categories.length === 0) return null;
    let noDel = document.getElementById('header0')
    if (noDel) {
      noDel.style.visibility = "hidden"
    }



    return (
      <div className="catIndex">
        {this.props.categories.map((category, idx) => (
          <Link key={idx} to={`/categories/${category._id}`} id={`cat${idx + 1}`} className="cat-body">
            <div className="header-format">
              <div
                className="cat-header"
                id={`header${idx}`}
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