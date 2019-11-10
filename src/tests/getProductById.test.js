const request = require('supertest');
const app = require('../../app');
describe('Post Endpoints', () => {
  it('should recieve a product', async () => {
    const res = await request(app)
      .post('/product/by-id')
      .send({
        productId: 10719
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('id');
    expect(res.body).toHaveProperty('name');
    expect(res.body).toHaveProperty('description');
    expect(res.body).toHaveProperty('features');
    expect(res.body).toHaveProperty('price_data');
    expect(res.body).toHaveProperty('overview');
    expect(res.body).toHaveProperty('images');
    expect(res.body).toHaveProperty('category_hierarchy');
    expect(res.body).toHaveProperty('category_name');
    expect(res.body).toHaveProperty('brand');
    expect(res.body).not.toBeNull();
  });
});
