const Validator = require("validator")

const isEmpty = require("./isEmpty")

module.exports = ({
    name = "",
    surname = "",
    address = "",
    email = "",
    password = "",
    password2 = ""
}) => {
    const errors = {}

    if (!Validator.isLength(name, { min: 2, max: 30 })) {
        errors.name = "Please enter a valid name"
    }

    if (Validator.isEmpty(name)) {
        errors.name = "Name field is requiered"
    }
    if (!Validator.isLength(surname, { min: 2, max: 30 })) {
        errors.surname = "Please enter a valid surname"
    }

    if (Validator.isEmpty(surname)) {
        errors.surname = "Surname field is requiered"
    }

    if (!Validator.isLength(address, { min: 2, max: 30 })) {
        errors.address = "Please enter a valid address"
    }

    if (Validator.isEmpty(address)) {
        errors.address = "Address field is requiered"
    }

    if (!Validator.isEmail(email)) {
        errors.email = "Please enter a valid email"
    }

    if (Validator.isEmpty(email)) {
        errors.email = "Email field is requiered"
    }

    if (!Validator.isLength(password, { min: 6, max: 60 })) {
        errors.password = "Password must contain at least 6 characters"
    }

    if (Validator.isEmpty(password)) {
        errors.password = "Please enter your password"
    }

    if (Validator.isEmpty(password)) {
        errors.password2 = "Please repeat your password"
    }

    if (!Validator.equals(password, password2)) {
        errors.password = "Passwords must match"
        errors.password2 = "Passwords must match"
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors
    }
}
