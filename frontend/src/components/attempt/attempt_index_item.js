import React from 'react';
import { formatTime } from './../../util/formats';

const AttemptIndexItem = ({ attempt, deleteAttempt, idx }) => {
    
    return (
        <div className="attempt">
            <strong className="attempt-number">Attempt #{idx+1}</strong>
            <strong className="attempt-time">{formatTime(attempt.time)}</strong>
        </div>
    );
};

export default AttemptIndexItem;