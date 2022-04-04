const express = require('express')
const router = express.Router()
const { checkJwt, checkScopes } = require('../../utility/auth')
const importController = require('../../controllers/import')

router.get('/', (req, res) => {
    res.send('get all filters')
})

router.get('/:name', (req, res) => {
    res.send(`get ${req.params['name']}`)
})
router.post('/import', checkJwt, checkScopes, (req, res) => {
    importController(req, res)
})

module.exports = router