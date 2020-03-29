import React from 'react';

const Tutorial = () => {
    const stepOne = <div className="tutorial-description">
        <h1 className="tutorial-message">Welcome to the SWEETT tutorial! This tutorial will guide you on how to use this app!</h1>
    </div>

    const stepTwo = <div>
        <img className="circle" src={require("./../../assets/images/circle.png")} />
            <h1 className="tutorial-message">This button is to add a task! You will be prompted to fill out the name of the task and which section it belongs to.</h1>
    </div>

    const stepThree = <div>
        <h1 className="tutorial-message">Once you add a task, you are able to record its time. This button will start a recording session for this task. You are able to pause and stop the timer.</h1>
    </div>

    const stepFour = <div>
        <img className="circle" src={require("./../../assets/images/circle.png")} />
        <i className="tutorial-arrow fas fa-arrow-right">
            <h1 className="tutorial-message">This button is to add a goal. You will be prompted to add its description, amount to complete it, and choose to track its time.</h1>
        </i>
    </div>

    const stepFive = <div>
        <h1 className="tutorial-message">This button is to modify the time limit for each task.</h1>
    </div>

    return (
        <div className="tutorial-background">
            {stepOne}
        </div>
    );
};

export default Tutorial;