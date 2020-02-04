import React from 'react';
import { formatTime, formatDate } from './../../util/formats';

const AttemptIndexItem = ({ attempt, deleteAttempt, idx }) => {
    console.log(attempt._id)
    console.log(deleteAttempt)
    
    return (
        <div className="attempt">
            <strong className="attempt-number">Attempt {idx+1}</strong>
            <strong className="attempt-time">{formatTime(attempt.time)}</strong>
            <strong className="attempt-date">{formatDate(attempt.date)}</strong>
            <button className="attempt-remove" onClick={() => deleteAttempt(attempt._id)}></button>
        </div>
    );
};

export default AttemptIndexItem;