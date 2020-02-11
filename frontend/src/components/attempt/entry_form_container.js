import { connect } from "react-redux";
import EntryForm from './entry_form'
import { openModal, closeModal } from "../../actions/modal_actions";
import { createEntry } from '../../actions/entry_actions';

const mapStateToProps = state => {
    return {
        state
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: entry => dispatch(createEntry(entry)),
        closeModal: () => dispatch(closeModal()),
        addEntry: () => dispatch(openModal("addEntry"))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EntryForm);
