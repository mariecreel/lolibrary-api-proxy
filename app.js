const express = require('express')
const { auth } = require('express-openid-connect')
require('dotenv').config()
const app = express()
const filters = require('./routes/filters/index')
// see https://auth0.github.io/express-openid-connect/
app.use(auth({
    authRequired: false
}))

app.use('/filters', filters)

app.listen(process.env.PORT || 3000, console.log("Server is running"));