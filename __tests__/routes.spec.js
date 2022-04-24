const request = require('supertest')
const app = require('../app.js')
const { checkAllowedFilters } = require('../utility/validator')

describe('get /filters', () => {
    it('get all filters', async () => {
        const res = await request(app)
          .get('/filters')
        expect(res.statusCode).toEqual(200)
        for (const filter of Object.keys(res.body)) {
            expect(checkAllowedFilters(filter)).toBe(true)
        }
    })
})