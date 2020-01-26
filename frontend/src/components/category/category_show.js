import React from 'react';
import LeetCodeContainer from './../leetcode/leetcode_container';

class CategoryShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.requestCategory(this.props.match.params.categoryId);
    }

    componentDidUpdate(preProps) {
        if(this.props.match.params.categoryId !== preProps.match.params.categoryId) {
            this.props.requestCategory(this.props.match.params.categoryId);
        }
    }

    render() {
        if(!this.props.category) return null;
        
        if(this.props.category.title === "Leetcode") {
            return <LeetCodeContainer category={this.props.category}/>
        } else {
            return (
                <h1>hi</h1>
            )
        }
    }
}

export default CategoryShow;