export const calculateExpectedTime = (limit, goals) => {
    let totalQuestions = 0;
    for (let i = 0; i < goals.length; i++) {
        if (goals[i].addToTotal) totalQuestions += goals[i].expected;
    }

    return Math.floor((totalQuestions * limit) / 60);
};

//add goals later for attempted q's
export const calculateActualTime = (attempts) => {
    let totalTime = 0;
    for (let i = 0; i < attempts.length; i++) {
        totalTime += attempts[i].time;
    }

    return Math.floor(totalTime / 60);
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