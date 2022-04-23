// external modules
const express = require('express')
const { param, body, validationResult } = require('express-validator')
// internal modules
const { checkJwt, checkScopes } = require('../../utility/auth')
const importController = require('../../controllers/import')
const { filterController, allFiltersController } = require('../../controllers/filters')
const { checkAllowedFilters, checkImport } = require('../../utility/validator')
// other constants
const router = express.Router()

router.get('/', (req, res) => {
    allFiltersController(req, res)
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