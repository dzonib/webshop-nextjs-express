const express = require("express")
const bcrypt = require("bcryptjs")
const {check, validationResult} = require("express-validator/check")

const User = require("../db/models/User")
const router = express.Router()

// REGISTER
router.post("/register", [
    check("name", "Name must be at lest 2 charachters long")
        .trim()
        .isLength({min: 2}),
    check("password", "Password must be at least 5 characthers long")
        .trim()
        .isLength({min: 5}),
    check("email", "Please enter valid email")
        .trim()
        .isEmail()
], async(req, res) => {
    const {name, email, password, password2, address} = req.body
    try {
        const user = await User.findOne({where: {
                email
            }})

        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res
                .status(403)
                .json({
                    errors: errors.mapped()
                })
        }

        if (user) {
            // CUSTOM ERROR VALIDATION REJECTION
            if (user) {
                return Promise
                    .reject('User with that email already registered')
                    .catch(e => res.json(e))
            }
        }

        if (password !== password2) {
            return Promise
                .reject('Passwords and Password2 do not match')
                .catch(e => res.json(e))
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = await User.create({name, address, email, password: hashedPassword})

        res.json(newUser)
    } catch (e) {
        console.log(e.message)
    }
})

// LOGIN
router.post("/login", [
    check("email", "Please enter a valid email address.")
        .trim()
        .isEmail()
], async(req, res) => {
    const {email, password} = req.body
    try {
        const userCheck = await User.findOne({where: {
                email
            }})

        if (!userCheck) {
            // return Promise.reject(     "Invalid email or password" ).catch(e =>
            // res.json(e))
            return res
                .status(403)
                .send('Invalid email or password')
        }

        const passwordCheck = await bcrypt.compare(password, userCheck.password)

        if (!passwordCheck) {
            return Promise.reject("Wrong email or password")
        }

        const userPayload = {
            id: userCheck.id,
            email: userCheck.email,
            name: userCheck.name,
            address: userCheck.address,
            type: 'authenticated',
        }

        const COOKIE_OPTIONS = {
            // domain: "", prevent access from client
            httpOnly: true,
            // only https
            secure: process.env.NODE_ENV === 'production',
            // we can verify the source of the cookie
            signed: true
        }

        // name, payload, options
        res.cookie('token', userPayload, COOKIE_OPTIONS)

        res.json(userPayload)
    } catch (e) {
        console.log(e.message)
    }
})

// GET USERS PROFILE
router.get('/profile', async (req, res) => {
    try {
        // cookie is automatically passed by axios and it needs to have default value
        // (empty object) if user is not authorized

        // console.log(req.signedCookies.token)
        const {
            signedCookies = {}
        } = req

        const {token} = signedCookies

        console.log(token)

        if (token && token.email) {
            console.log(token)

            const user = await User.findOne({
                where: {
                    email: token.email
                }
            })

            return res.json(user)
        }
        res.sendStatus(404)
    } catch (e) {
        console.log(e.message)
    }
})

module.exports = router
