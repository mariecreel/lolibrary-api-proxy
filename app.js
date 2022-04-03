/**
 * required external modules
 */
require('dotenv').config()
const express = require('express')
const path = require("path")
const expressSession = require("express-session")

const passport = require("passport")
/**
 * app variables
 */
const app = express()
const Auth0Strategy = require("passport-auth0")

/**
 * session config
 */
const session = {
    process.env.SESSION_SECRET,
    cookie: {},
    resave: false,
    saveUninitialized: false
}

if (app.get('env') === 'production') {
    // serve secure cookies
    session.cookie.secure = true;
}

/**
 * passport config
 */

/**
 * app config
 */
 app.set('views', path.join(__dirname, 'views'))
 app.set('view engine', 'pug')
 app.use(express.static(path.join(__dirname, 'public')))
 
 app.use(expressSession(session))

/**
 * routers
 */
const filters = require('./routes/filters/index')
const login = require('./routes/login/index')


app.use('/filters', filters)
app.use('/login', login)

app.listen(process.env.PORT || 3000, console.log("Server is running"));