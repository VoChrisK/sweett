export const formatTime = (time) => {
    let hours = 0;
    let minutes = 0;

    while (time > 59) {
        minutes += 1;
        time -= 59;
    }

    while (minutes > 59) {
        hours += 1;
        minutes -= 59;
    }

    if (hours < 10) {
        hours = "0" + hours;
    }

    if(minutes < 10) {
        minutes = "0" + minutes;
    }

    if (time < 10) {
        time = "0" + time;
    }

    return `${hours}:${minutes}:${time}`;
};

export const formatDate = () => {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let currentDate = new Date(Date.now());
    
    return daysOfWeek[currentDate.getDay()] + ", " + monthsOfYear[currentDate.getMonth()] + " " + currentDate.getDate() + ", " + currentDate.getFullYear();
}