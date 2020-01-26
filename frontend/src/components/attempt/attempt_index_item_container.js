import { connect } from 'react-redux';
import AttemptIndexItem from './attempt_index_item';
import { deleteAttempt } from './../../actions/attempt_actions';

const mapStateToProps = (state, ownProps) => {
    return ({
        attempt: ownProps.attempt,
        idx: ownProps.idx
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        deleteAttempt: attemptId => dispatch(deleteAttempt(attemptId))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(AttemptIndexItem);