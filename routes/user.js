const express = require("express")
const { check, validationResult } = require("express-validator/check")

const User = require("../db/models/User")
const router = express.Router()

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
                
                return res.status(403).json(errors.mapped())
            }
            if (user)
                throw new Error("Korisnik sa tim emejlom je već registrovan.")

            const newUser = await User.create({
                name,
                address,
                email,
                password
            })

            res.json(newUser)
        } catch (e) {
            console.log(e.message)
        }
    }
)

module.exports = router
