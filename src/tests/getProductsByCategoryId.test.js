const request = require('supertest');
const app = require('../../app');
describe('Post Endpoints', () => {
  it('should recieve a product by category id', async () => {
    const res = await request(app)
      .post('/product/by-categoty-id')
      .send({
        categoryId: 258
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body[0]).toHaveProperty('id');
    expect(res.body[0]).toHaveProperty('name');
    expect(res.body[0]).toHaveProperty('description');
    expect(res.body[0]).toHaveProperty('features');
    expect(res.body[0]).toHaveProperty('price_data');
    expect(res.body[0]).toHaveProperty('overview');
    expect(res.body[0]).toHaveProperty('images');
    expect(res.body[0]).toHaveProperty('category_hierarchy');
    expect(res.body[0]).toHaveProperty('category_name');
    expect(res.body[0]).toHaveProperty('brand');
  });
});
