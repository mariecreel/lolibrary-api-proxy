const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('get all filters');
});

router.get('/:name', (req, res) => {
    res.send(`get ${req.params['name']}`);
});

router.post('/import', (req, res) => {
    res.send(`import filter values`);
});

module.exports = router;