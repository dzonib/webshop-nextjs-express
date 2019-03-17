const express = require("express")
const next = require("next")

const sequelize = require("./db/sequelize")
const dev = process.env.NODE_ENV !== "production"
const port = process.env.port || 3000
const app = next({ dev })
const handle = app.getRequestHandler()

const userRoutes = require('./routes/user')

app.prepare().then(() => {
    const server = express()

    server.use(express.json())
 
    server.use('/api/user', userRoutes)

    server.get('/test', (req, res) => {
        res.json({bla: true})
    })

    server.get("*", (req, res) => {
        return handle(req, res)
    })

    sequelize.sync().then(() => server.listen(port, err => {
        if (err) throw new Error(err)
        console.log(`App running on port ${port}`)
    }))
})
