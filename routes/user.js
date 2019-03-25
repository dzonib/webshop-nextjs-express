const express = require("express")
const bcrypt = require("bcryptjs")
const { check, validationResult } = require("express-validator/check")

const User = require("../db/models/User")
const router = express.Router()

// REGISTER
router.post(
    "/register",
    [
        check("name", "Name must be at lest 2 charachters long")
            .trim()
            .isLength({ min: 2 }),
        check("password", "Password must be at least 5 characthers long")
            .trim()
            .isLength({ min: 5 }),
        check("email", "Please enter valid email")
            .trim()
            .isEmail()
    ],
    async (req, res) => {
        const { name, email, password, address } = req.body
        try {
            const user = await User.findOne({ where: { email } })

            const errors = validationResult(req)

            if (!errors.isEmpty()) {
                return res.status(403).json({ errors: errors.mapped() })
            }
            if (user) {
                // CUSTOM ERROR VALIDATION REJECTION
                // return Promise.reject(
                //     "Korisnik sa tim emejlom je već registrovan."
                // ).catch(e => console.log(e.message))
                throw new Error('User registered')
            }

            console.log(errors)
            const hashedPassword = await bcrypt.hash(password, 10)

            const newUser = await User.create({
                name,
                address,
                email,
                password: hashedPassword
            })

            res.json(newUser)
        } catch (e) {
            console.log(e.message)
        }
    }
)

// LOGIN
router.post(
    "/login",
    [
        check("email", "Unesite ispravan emejl")
            .trim()
            .isEmail()
    ],
    async (req, res) => {
        const { email, password } = req.body
        try {
            const userCheck = await User.findOne({ where: { email } })

            if (!userCheck) {
                return Promise.reject(
                    "Korisnik sa tim emejlom nije registrovan"
                )
            }

            const passwordCheck = await bcrypt.compare(password, userCheck.password)

            if (!passwordCheck) {
                return Promise.reject("Pogrešna lozinka ili emejl")
            }

            const userPayload = {
                id: userCheck.id,
                name: userCheck.name,
                address: userCheck.address,
                type: 'authenticated'
            }

            const COOKIE_OPTIONS = {
                // domain: "",
                // prevent access from client
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
    }
)

module.exports = router
