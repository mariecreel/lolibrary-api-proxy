require('dotenv').config();
const express = require('express');
const filters = require('./routes/filters/index');
const app = express();


app.use('/filters', filters);

app.listen(process.env.port || 3000, console.log("Server is running"));