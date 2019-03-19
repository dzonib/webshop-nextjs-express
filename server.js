require('dotenv').config()
const express = require("express")
const next = require("next")
const cookieParser = require('cookie-parser')

const sequelize = require("./db/sequelize")
const dev = process.env.NODE_ENV !== "production"
const port = process.env.port || 3000
const app = next({ dev })
const handle = app.getRequestHandler()

const userRoutes = require('./routes/user')

app.prepare().then(() => {
    const server = express()

    server.use(express.json())
    // SIGN COOKIE SECRET (its in .env file)
    server.use(cookieParser(process.env.COOKIE_SECRET))

    // NOW THAT WE ADDED COOKIE PARSER AS MIDDLEWARE AND WE ADDED COOKIE SECRET
    // WE CAN READ COOKIES FROM req.signedCookies()
 
    server.use('/api/user', userRoutes)


    server.get("*", (req, res) => {
        return handle(req, res)
    })

    sequelize.sync().then(() => server.listen(port, err => {
        if (err) throw new Error(err)
        console.log(`App running on port ${port}`)
    }))
})
