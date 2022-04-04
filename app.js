const express = require('express')
require('dotenv').config()
const app = express()
const filters = require('./routes/filters/index')
const db = require('./models/index.js')

app.use('/filters', filters)

app.listen(process.env.PORT || 3000, console.log("Server is running"));