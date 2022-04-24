const express = require('express')
require('dotenv').config()
const rateLimit = require('express-rate-limit')
const bodyParser = require('body-parser')
const app = express()
const filters = require('./routes/filters/index')

const limiter = rateLimit({
    windowMs: 5 * 60 * 1000, // five minutes
    max: 100,
})

app.use(bodyParser.json())
app.use(limiter)
app.use('/filters', filters)
// only open a connection if we're running our server directly from the command line
// this way, we don't get a warning for open handles when running Jest
if (require.main === module) {
    app.listen(process.env.PORT || 3000, console.log("Server is running"));
}

module.exports = app