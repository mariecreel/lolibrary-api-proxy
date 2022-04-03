const express = require('express')
const router = express.Router()
const { requiresAuth } = require('express-openid-connect');

router.get('/', (req, res) => {
    res.send('get all filters')
})

router.get('/:name', (req, res) => {
    res.send(`get ${req.params['name']}`)
})

router.post('/import', requiresAuth(), (req, res) => {
    res.send(`import filter values (requires auth)`)
})

module.exports = router