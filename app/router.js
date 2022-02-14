'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const counter = app.middleware.counter();
  const { router, controller } = app;
  // 测试
  router.get('/', counter, controller.test.home.index);
  router.get('/js', controller.test.home.jsyc);
  router.get('/my', controller.test.my.index);
  router.get('/test', controller.test.my.indexMy);
  router.get('/query', controller.test.my.query);
  router.get('/params/:name/:age', controller.test.my.params);
  router.post('/postReq', controller.test.my.postRequest);
  router.post('/add', controller.test.home.add);
  router.post('/del', controller.test.home.del);
  router.post('/edit', controller.test.home.edit);
  router.post('/show', controller.test.home.show);
  router.post('/context', controller.test.home.newContext);
  router.post('/request', controller.test.home.newRequest);
  router.get('/response', controller.test.home.newResponse);
  router.get('/addGril', controller.test.girlManage.add);
  router.get('/updateGril', controller.test.girlManage.updated);
  router.get('/delGril', controller.test.girlManage.del);
  router.get('/getGril', controller.test.girlManage.get);
  // 登录，注册， 修改密码
  router.post('/register', controller.user.addUser);
  router.post('/login', controller.user.getUser);
  router.post('/changePassword', controller.user.updateUser);
};
