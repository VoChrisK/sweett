export const calculateExpectedTime = (attempts, goals) => {
    let totalTime = 0;
    for(let i = 0; i < attempts.length; i++) {
        if (goals[i].addToTotal) totalTime += attempts[i].time;
    }

    return totalTime;
};

export const calculateActualTime = (actualTime, limits, goals) => {
    let totalQuestions = 0;
    for(let i = 0; i < goals.length; i++) {
        if(goals[i].addToTotal) totalQuestions += goals[i].actual;
    }

    for(let i = 0; i < limits.length; i++) {
        totalQuestions *= limits[i];
    }

    return (actualTime + totalQuestions);
};
export const calculateProgress = (goal) => {
    return parseFloat(((goal.attempted / goal.expected) * 100).toFixed(2));
}

export const calculateTotalProgress = (goals) => {
    let attempted = 0;
    let expected = 0;
    for(let i = 0; i < goals.length; i++) {
        attempted += goals[i].attempted;
        expected += goals[i].expected;
    }

    return parseFloat(((attempted / expected) * 100).toFixed(2));
}

export const calculateDays = (date1, date2) => {
    let differenceInTime = date2 - date1.getTime();
    return Math.floor(differenceInTime / (1000 * 3600 * 24)) + 1;
}