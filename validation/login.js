const Validator = require("validator")

module.exports = ({ email = "", password = "" }) => {
    const errors = {}

    if (!Validator.isEmail(email) || Validator.isEmpty(email)) {
        errors.email = "Please enter a valid email"
    }

    if (Validator.isEmpty(password)) {
        errors.password = "Please enter your password"
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors
    }
}
