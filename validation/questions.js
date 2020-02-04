const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateQuestionsInput(data) {
    let errors = {};
    data.name = validText(data.name) ? data.name : "";
    data.status = validText(data.status) ? data.status : "";
    data.difficulty = validText(data.difficulty) ? data.difficulty : "";
    if (Validator.isEmpty(data.name)) {
        errors.name = "Name is required";
    }

    if (!(Validator.equals(data.status, "Complete") || Validator.equals(data.status, "Incomplete"))) {
        errors.status = "Status is only `Complete` or `Incomplete`"
    }

    if (Validator.isEmpty(data.status)) {
        errors.status = "Status is required"
    }

    if (!(Validator.equals(data.difficulty, "Easy") || Validator.equals(data.difficulty, "Medium") || Validator.equals(data.difficulty, "Hard"))) {
        errors.difficulty = "Difficuly is only `Easy`, `Medium`, or `Hard`"
    }

    if (Validator.isEmpty(data.difficulty)) {
        errors.difficulty = "Difficulty is required"
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}