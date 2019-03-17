const express = require("express")

const User = require("../db/models/User")
const router = express.Router()

router.post("/register", async (req, res) => {
    const { name, email, password, address } = req.body
    try {
        const user = await User.findOne({ where: { email } })
        if (user) throw new Error('Korisnik sa tim emejlom je već registrovan.')

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
})

module.exports = router
