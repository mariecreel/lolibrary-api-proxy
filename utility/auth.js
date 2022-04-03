const { auth, requiredScopes } = require('express-oauth2-jwt-bearer')

const checkJwt = auth({
    audience: process.env.API_URL,
    issuerBaseUrl: process.env.ISSUER_BASE_URL,
})

const checkScopes = requiredScopes('import:filters');

module.exports = {
    checkJwt: checkJwt,
    checkScopes: checkScopes,
}
