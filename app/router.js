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
  // 用户信息
  router.post('/getUserMessage', controller.userMessage.getUserMessage);
  router.post('/updateUserMessage', controller.userMessage.updateUserMessage);
  // 发贴√
  router.post('/addForum', controller.forum.index.addForum);
  router.get('/getForum', controller.forum.index.getForum);
  router.post('/getForumAll', controller.forum.index.getForumAll);
  router.post('/getForumDim', controller.forum.index.getForumDim);
  router.post('/getForumId', controller.forum.index.getForumId);
  router.post('/getUserForum', controller.forum.index.getUserForum);
  router.post('/updateForum', controller.forum.index.updateForum);
  router.post('/deleteForum', controller.forum.index.deleteForum);
  router.get('/upLoad', controller.upload.index.upload);

  // 点赞
  router.post('/addDianzan', controller.forum.dianzan.addDianzan);
  router.post('/deleteDianzan', controller.forum.dianzan.deleteDianzan);
  // 我的点赞
  router.post('/getDianzanNum', controller.forum.dianzan.getDianzanNum);
  router.post('/getDianzanForum', controller.forum.dianzan.getDianzanForum);
  // 给我点赞的
  router.post('/getUserDianzanNum', controller.forum.dianzan.getUserDianzanNum);

  // 评论
  router.post('/addComment', controller.forum.comment.addComment);
  router.post('/deleteComment', controller.forum.comment.deleteComment);
  router.post('/updateComment', controller.forum.comment.updateComment);
  // 我的评论
  router.post('/getComment', controller.forum.comment.getComment);
  router.post('/getCommentForum', controller.forum.comment.getCommentForum);

  // 评论我的 getUserForumComment
  router.post('/getUserForumComment', controller.forum.comment.getUserForumComment);
  // 收藏
  router.post('/addCollect', controller.forum.collect.addCollect);
  router.post('/deleteCollect', controller.forum.collect.deleteCollect);
  // 我的收藏
  router.post('/getCollect', controller.forum.collect.getCollect);
  router.post('/getCollectForum', controller.forum.collect.getCollectForum);
  // 收藏我的
  router.post('/getUserCollectNum', controller.forum.collect.getUserCollectNum);

  // 我的关注
  router.post('/addUserAttention', controller.userAttention.addUserAttention);
  router.post('/deleteUserAttention', controller.userAttention.deleteUserAttention);
  router.post('/getUserAttentionNum', controller.userAttention.userAttentionNum);
  // 我关注的
  router.post('/getUserAttentionMessage', controller.userAttention.userAttentionMessage);
  // 关注我的
  router.post('/getUserAttentionTMessage', controller.userAttention.userAttentionTMessage);
  router.post('/updateUserAttWarn', controller.userAttention.updateUserAttWarn);
};
