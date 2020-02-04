import React from 'react';
import { formatTime, formatDate } from './../../util/formats';

const AttemptIndexItem = ({ attempt, deleteAttempt, idx }) => {
<<<<<<< HEAD
    // console.log(attempt)
=======
>>>>>>> 6edeb9255c16a6e056e5534c8753167470194924
    return (
        <div className="attempt">
            <strong className="attempt-number">Attempt {idx+1}</strong>
            <strong className="attempt-time">{formatTime(attempt.time)}</strong>
            <strong className="attempt-date">{formatDate(attempt.date)}</strong>
        </div>
    );
};

export default AttemptIndexItem;