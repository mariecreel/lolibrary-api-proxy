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
            expect(res.body[filter].length).toBeGreaterThanOrEqual(1)
        }
    })
    describe('get individual filters', () => {
        ['tags', 'colorway', 'year', 'features', 'category', 'brand'].forEach(filter => {
            it(`get /filters/${filter}`, async () => {
                const res = await request(app)
                .get(`/filters/${filter}`)
                expect(res.statusCode).toEqual(200)
                expect(res.body).toHaveProperty(filter)
                expect(res.body[filter].length).toBeGreaterThanOrEqual(1)
            })
        })
    })
})