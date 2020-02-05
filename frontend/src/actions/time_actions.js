export const receiveTime = (time) => {
    return({
        type: RECEIVE_TIME,
        time
    });
};

export const RECEIVE_TIME = "RECEIVE_TIME";