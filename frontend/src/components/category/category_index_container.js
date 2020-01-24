import { connect } from 'react-redux';
import CategoryIndex from './category_index';
import { requestCategories } from './../../actions/category_actions';
import {openModal} from '../../actions/modal_actions'
import React from 'react'

const mapStateToProps = (state) => {
    console.log(state, 'cat state')
    return ({
        categories: Object.values(state.entities.categories),
        currentUserId: state.session.user.id
    });
};

const mapDispatchToProps = (dispatch) => {
    return {
      addCat: () => dispatch(openModal("addCategory")),
      requestCategories: currentUserId =>
        dispatch(requestCategories(currentUserId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryIndex);