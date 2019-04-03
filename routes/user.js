const express = require("express")
const bcrypt = require("bcryptjs")

const User = require("../db/models/User")
const registerValidation = require("../validation/register")
const loginValidation = require("../validation/login")

const router = express.Router()

// REGISTER
router.post("/register", async (req, res) => {
    const { name, surname, email, password, address } = req.body

    const { isValid, errors } = registerValidation(req.body)

    if (!isValid) {
        res.status(403).json(errors)
    }

    try {
        const user = await User.findOne({
            where: {
                email
            }
        })

        if (user) {
            errors.email = "User with this email is already registered"
            res.status(403).json(errors)
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = await User.create({
            name,
            surname,
            address,
            email,
            password: hashedPassword
        })

        res.json(newUser)
    } catch (e) {
        console.log(e.message)
    }
})

// LOGIN
router.post("/login", async (req, res) => {
    const { email, password } = req.body

    const { errors, isValid } = loginValidation(req.body)

    if (!isValid) {
        res.status(403).json(errors)
    }

    try {
        const userCheck = await User.findOne({
            where: {
                email
            }
        })

        if (!userCheck) {
            errors.email = "User with that email is not registered"
            res.status(403).json(errors)
        }

        const passwordCheck = await bcrypt.compare(password, userCheck.password)

        if (!passwordCheck) {
            errors.email = "Wrong password or email address"
            errors.password = "Wrong password or email address"
            res.status(403).json(errors)
        }

        const userPayload = {
            id: userCheck.id,
            email: userCheck.email,
            name: userCheck.name,
            address: userCheck.address,
            type: "authenticated"
        }

        const COOKIE_OPTIONS = {
            // domain: "", prevent access from client
            httpOnly: true,
            // only https
            secure: process.env.NODE_ENV === "production",
            // we can verify the source of the cookie
            signed: true
        }

        // name, payload, options
        res.cookie("token", userPayload, COOKIE_OPTIONS)

        res.json(userPayload)
    } catch (e) {
        console.log(e.message)
    }
})

// GET USERS PROFILE
router.get("/profile", async (req, res) => {
    try {
        // cookie is automatically passed by axios and it needs to have default value
        // (empty object) if user is not authorized

        // console.log(req.signedCookies.token)
        const { signedCookies = {} } = req

        const { token } = signedCookies

        if (token && token.email) {

            return res.json(token)
        }
        res.status(404).json("Not authenticated!")
    } catch (e) {
        console.log(e.message)
    }
})

module.exports = router
