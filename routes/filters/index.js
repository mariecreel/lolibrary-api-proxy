const express = require('express')
const router = express.Router()
const { checkJwt, checkScopes } = require('../../utility/auth')
const importController = require('../../controllers/import')
const { param, body, validationResult } = require('express-validator')

const checkAllowedFilters = value => {
    const _allowedFilters = {
        'year': 1,
        'colorway': 1,
        'tags': 1, 
        'brand': 1,
        'category': 1,
        'features': 1
    }
    return typeof _allowedFilters[value] !== 'undefined'
}

router.get('/', (req, res) => {
    res.send('get all filters')
})

router.get('/:name',
        param('name')
             .exists()
             .bail()
             .isString()
             .bail()
             .custom(checkAllowedFilters),
    (req, res) => {
    const errors = validationResult(req)
    if (errors.isEmpty()) {
    res.send(`get ${req.params['name']}`)
    } else {
        res.status(422).send()
    }
})
router.post('/import', checkJwt, checkScopes, (req, res) => {
    importController(req, res)
})

module.exports = router