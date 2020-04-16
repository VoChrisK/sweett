import { connect } from "react-redux";
import { openModal } from "../../actions/modal_actions";
import Hero from "./hero";

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    login: () => dispatch(openModal("login"))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Hero);
