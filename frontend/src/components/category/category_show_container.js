import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CategoryShow from './category_show';
import { requestCategory } from '../../actions/category_actions';

const mapStateToProps = (state, ownProps) => {
    return ({
        category: state.entities.categories[ownProps.match.params.categoryId]
    });
}

const mapDispatchToProps = (dispatch) => {
    return ({
        requestCategory: categoryId => dispatch(requestCategory(categoryId))
    });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CategoryShow));