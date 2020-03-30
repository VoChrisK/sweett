import React, { useState } from 'react';
import { connect } from 'react-redux';
import { hideTutorial } from '../../actions/tutorial_actions';

const Tutorial = ({ hideTutorial }) => {
    const stepOne = <div className="tutorial-description big" onClick={e => e.stopPropagation()}>
        <h1 className="tutorial-message one">Welcome to the SWEETT tutorial! This tutorial will guide you on how to use this app!</h1>
    </div>

    const stepTwo = <div className="tutorial-description two" onClick={e => e.stopPropagation()}>
            <h1 className="tutorial-message">This button is to add a task! You will be prompted to fill out the name of the task and which section it belongs to.</h1>
    </div>

    const stepThree = <div className="tutorial-description three" onClick={e => e.stopPropagation()}>
        <h1 className="tutorial-message">Once you add a task, you are able to record its time. This button will start a recording session for this task. You are able to pause and stop the timer.</h1>
    </div>

    const stepFour = <div className="tutorial-description four" onClick={e => e.stopPropagation()}>
        {/* <img className="circle" src={require("./../../assets/images/circle.png")} /> */}
        <h1 className="tutorial-message">This button is to add a goal. You will be prompted to add its description, amount to complete it, and choose to track its time.</h1>
    </div>

    const stepFive = <div className="tutorial-description five" onClick={e => e.stopPropagation()}>
        <h1 className="tutorial-message">This button is to modify the time limit for each task.</h1>
    </div>

    const [counter, setCounter] = useState(0);
    const steps = [stepOne, stepTwo, stepThree, stepFour, stepFive];

    const increment = () => {
        if(counter >= steps.length - 1) hideTutorial();
        setCounter(counter + 1);
    }

    return (
        <div className="tutorial-background" onClick={increment}>
            {steps[counter]}
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        hideTutorial: () => dispatch(hideTutorial())
    };
}

export default connect(null, mapDispatchToProps)(Tutorial);