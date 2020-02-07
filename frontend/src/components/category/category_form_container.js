import { connect } from "react-redux";
import CategoryForm from './category_form'
import { openModal, closeModal } from "../../actions/modal_actions";
import { createCategory } from '../../actions/category_actions'

const mapStateToProps = state => {
  return {
      state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processCat: category => dispatch(createCategory(category)),
    closeModal: () => dispatch(closeModal()),
    addCat: () => dispatch(openModal("addCategory"))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryForm);
