import { SHOW, HIDE } from './../actions/tutorial_actions';

const TutorialReducer = (state = "sleep", action) => {
    Object.freeze(action.type);
    switch(action.type) {
        case "SHOW":
            return "show";
        case "HIDE":
            return "hide";
        default:
            return state;
    }  
};

export default TutorialReducer;