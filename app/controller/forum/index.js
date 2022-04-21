'use strict';

const Controller = require('egg').Controller;

class forumController extends Controller {
  async addForum() {
    const ctx = this.ctx;
    const data = ctx.request.body;
    const getData = await ctx.service.forum.index.addForumData(data);
    ctx.body = getData;
  }
  async getForum() {
    const ctx = this.ctx;
    const getData = await ctx.service.forum.index.getForumData();
    ctx.body = getData;
  }
  async getForumAll() {
    const ctx = this.ctx;
    const data = ctx.request.body;
    const getData = await ctx.service.forum.index.getForumDataAll(data);
    ctx.body = getData;
  }
  async getForumDim() {
    const ctx = this.ctx;
    const data = ctx.request.body;
    const getData = await ctx.service.forum.index.getForumDataDim(data);
    ctx.body = getData;
  }
  async getForumId() {
    const ctx = this.ctx;
    const data = ctx.request.body;
    const getData = await ctx.service.forum.index.getUserForumDataId(data);
    let commentUserId = [];
    getData.forEach(item => {
      item.comments.forEach(key => {
        key.commentReplies.forEach(v => {
          commentUserId.push(v.cruserId);
          commentUserId.push(v.userId);
        });
      });
    });
    commentUserId = [ ...new Set(commentUserId) ];
    const userMessageList = await ctx.service.userMessage.getUserMessageData({ userId: commentUserId });
    userMessageList.forEach(user => {
      getData.forEach(item => {
        item.comments.forEach(key => {
          key.commentReplies.forEach(v => {
            if (v.userId === user.userId) {
              v.dataValues.userIdMessage = user.dataValues;
            }
            if (v.cruserId === user.userId) {
              v.dataValues.cruserIdMessage = user.dataValues;
            }
          });
        });
      });
    });
    ctx.body = getData;
  }

  async getUserForum() {
    const ctx = this.ctx;
    const data = ctx.request.body;
    const getData = await ctx.service.forum.index.getUserForumData(data);
    ctx.body = getData;
  }
  async updateForum() {
    const ctx = this.ctx;
    const data = ctx.request.body;
    const getData = await ctx.service.forum.index.updatedForumData(data);
    ctx.body = getData;
  }
  async deleteForum() {
    const ctx = this.ctx;
    const data = ctx.request.body;
    const getData = await ctx.service.forum.index.deleteForumData(data);
    ctx.body = getData;
  }
}
module.exports = forumController;
