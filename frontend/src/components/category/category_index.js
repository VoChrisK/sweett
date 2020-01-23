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
        super(props);
    }

    clickPlus() {
        console.log('henlo')
    }

    componentDidMount() {
        this.props.requestCategories()
        .then(() => {
            library.add(fas)
            const plus = findIconDefinition({ prefix: 'fas', iconName: 'plus-circle' })
            const plusIcon = icon(plus)
            // Array.from(plusIcon.node).map(n => document.getElementsByClassName('plus-sign')[0].appendChild(n))
        });

    }

    render() {
        if(this.props.categories.length === 0) return null; 
        
        return (
            <div className="catIndex">
                {
                    this.props.categories.map((category, idx) => < CategoryIndexItem key={idx} category={category} idx={idx}/>)
                }
                <div className="plus-box">
                    <div onClick={this.clickPlus.bind(this)} className="plus-sign"></div>
                </div>
            </div>
        )
    }
}

export default CategoryIndex;