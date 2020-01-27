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
    
    let expectedString = data.expected.toString();
    if (!Validator.isInt(expectedString, { min: 1 })) {
        errors.expected = "Expected must be an integer greater than 0";
    }
    console.log(typeof data.expected)
    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}