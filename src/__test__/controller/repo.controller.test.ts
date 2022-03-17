const request = require('supertest');
const router = require('../../api/routes');

beforeEach((): void => {
    jest.setTimeout(60000);
});

jest.mock("../../api/service/repo.service");
jest.mock("../../api/service/user.service");

test('test invalid Accept', () => {

    it("", async () => {
        const result = await request(router)
            .get('/repo/user')
            .query({page: 1, per_page: 100})
            .set('Accept', 'application/xml')
            .expect(406);
    });
})

test('test invalid user', () => {

    it("", async () => {
        const result = await request(router)
            .get('/repo/user')
            .query({page: 1, per_page: 100})
            .set('Accept', 'application/json')
            .expect(404);
    });
})


test('test invalid user', () => {

    it("", async () => {
        const result = await request(router)
            .get('/repo/user')
            .query({page: 1, per_page: 100})
            .set('Accept', 'application/json')
            .expect(404);
    });
})