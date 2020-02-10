import React from 'react';
import LeetCodeContainer from './../leetcode/leetcode_container';
import CrackingTheCodingContainer from './../cracking-the-coding/ctc_container';
import { calculateExpectedTime, calculateActualTime, calculateTotalProgress } from './../../util/calculations';
import DefaultCategoryContainer from '../category/default_category_container'

class CategoryShow extends React.Component {

  componentDidMount() {
    this.props.requestCategory(this.props.match.params.categoryId)
      .then(categoryData => this.props.requestCategoryAttempts(categoryData.category._id)
        .then(attemptsData => {
          // categoryData.category.actual = calculateActualTime(attemptsData.attempts);
          categoryData.category.expected = calculateExpectedTime([45], this.props.goals);
          categoryData.category.progress = calculateTotalProgress(this.props.goals);
          this.props.updateCategory(categoryData.category)
        })
      )
      this.props.requestCategoryTasks(this.props.match.params.categoryId)

    }

    componentDidUpdate(prevProps) {
      if (this.props.match.params.categoryId !== prevProps.match.params.categoryId) {
        this.props.requestCategoryTasks(this.props.match.params.categoryId)
      }
    }

  render() {
    if (!this.props.category) return null;
    
    if (this.props.category.title === "Leetcode") {
      return <LeetCodeContainer category={this.props.category}/>;
    } else if (this.props.category.title === "CrackingTheCode") {
      return <CrackingTheCodingContainer category={this.props.category} />;
    } else {
      return <DefaultCategoryContainer category={this.props.category}/>
    }
    
    
  }
}

export default CategoryShow;