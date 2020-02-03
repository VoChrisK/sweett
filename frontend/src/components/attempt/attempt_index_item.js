import React from 'react';
import { formatTime, formatDate } from './../../util/formats';

const AttemptIndexItem = ({ attempt, deleteAttempt, idx }) => {
    console.log(attempt)
    return (
        <div className="attempt">
            <strong className="attempt-number">Attempt #{idx+1}</strong>
            <strong className="attempt-time">{formatTime(attempt.time)}</strong>
            <strong className="attempt-date">{formatDate(attempt.date)}</strong>
        </div>
    );
};

export default AttemptIndexItem;