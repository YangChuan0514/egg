'use strict';

const { app } = require('egg-mock/bootstrap');

describe('test/app/controller/test/my.test.js', () => {
  it('my index', () => {
    return app.httpRequest()
      .get('/my')
      .expect('<h1>124</h1>')
      .expect(200);
  });
  it('my indexMy', async () => {
    return app.httpRequest()
      .get('/test')
      .expect('<h1>test</h1>')
      .expect(200);
  });
});
