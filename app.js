require('dotenv').config();
const express = require("express");
const app = express();

app.get('/filters', (req, res) => {
    return;
});
app.get('/filters/${name}', (req, res) => {
    return;
});
app.post('/filters/import', (req, res) => {
    return;
});

app.listen(process.env.port || 3000, console.log("Server is running"));