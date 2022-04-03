const express = require('express')
const { auth } = require('express-openid-connect')
require('dotenv').config()
const app = express()
const filters = require('./routes/filters/index')

// see https://auth0.github.io/express-openid-connect/
// and https://auth0.com/docs/quickstart/webapp/express#integrate-auth0
app.use(auth({
    authRequired: false,
    auth0Logout: true, 
}))

app.use('/filters', filters)

app.get('/', (req, res) => {
    res.send(`hello ${req.oidc.user.sub}`)
})

app.listen(process.env.PORT || 3000, console.log("Server is running"));