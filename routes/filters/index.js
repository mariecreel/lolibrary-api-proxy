const express = require('express')
const router = express.Router()
const { checkJwt, checkScopes } = require('../../utility/auth')
const importController = require('../../controllers/import')
const { filterController, allFiltersController } = require('../../controllers/filters')
const { param, body, validationResult } = require('express-validator')
const { checkAllowedFilters, checkImport } = require('../../utility/validator')

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
        filterController(req, res) 
    } else {
        res.status(422).send()
    }
})
router.post('/import', 
            // run auth middleware first
            checkJwt,
            checkScopes, 
            // then sanitize/validate input
            body()
                 .isObject()
                 .bail()
                 .custom(checkImport),
            (req, res) => {
    const errors = validationResult(req)
    if (errors.isEmpty()) {
        importController(req, res)
    } else {
        res.status(422).send()
    }
})

module.exports = router