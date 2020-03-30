import { connect } from "react-redux";
import { openModal } from "../../actions/modal_actions";
import Hero from "./hero";

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    signup: () => dispatch(openModal("signup"))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Hero);
