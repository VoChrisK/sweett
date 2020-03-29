const TutorialReducer = (state = {}, action) => {
    Object.freeze(action.type);
    switch(action.type) {
        case "step 1":
            return action.step;
        default:
            return state;
    }  
};

export default TutorialReducer;