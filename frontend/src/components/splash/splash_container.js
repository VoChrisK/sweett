import { connect } from "react-redux";
import { openModal } from "../../actions/modal_actions";
import Splash from "./splash";

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    signup: () => dispatch(openModal("signup"))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
