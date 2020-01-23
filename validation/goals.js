const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateGoalsInput(data) {
    let errors = {};
    data.description = validText(data.description) ? data.description : "";
    
    if (!Validator.isLength(data.description, { max: 139 })) {
        errors.description = "Description must be less that 140 characters"
    }

    if (Validator.isEmpty(data.description)) {
        errors.description = "Description is required";
    }


    if (!Validator.isInt(data.progress, { min: 0, max: 100 })) {
        errors.progress = "Progress must be between 0 and 100"
    }

    if (!Validator.isBoolean(data.addToTotal)) {
        errors.addToTotal = "Add to total"
    }
    
    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}