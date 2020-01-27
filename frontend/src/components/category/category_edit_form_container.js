import { connect } from "react-redux";
import CategoryEditForm from "./category_edit_form";
import { openModal, closeModal } from "../../actions/modal_actions";
import { updateCategory } from "../../actions/category_actions";

const mapStateToProps = (state) => {
  console.log(state, 'edit container state')
  return {
    state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: category => dispatch(updateCategory(category)),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryEditForm);
