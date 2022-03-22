'use strict';

const Controller = require('egg').Controller;

class commentController extends Controller {
  async addComment() {
    const ctx = this.ctx;
    const data = ctx.request.body;
    const getData = await ctx.service.forum.comment.addCommentData(data);
    ctx.body = getData;
  }
  async updateComment() {
    const ctx = this.ctx;
    const data = ctx.request.body;
    const getData = await ctx.service.forum.comment.updateComment(data);
    ctx.body = getData;
  }
  async deleteComment() {
    const ctx = this.ctx;
    const data = ctx.request.body;
    const getData = await ctx.service.forum.comment.deleteCommentData(data);
    ctx.body = getData;
  }
  // 获取所有用户的评价
  async getComment() {
    const ctx = this.ctx;
    const data = ctx.request.body;
    const getData = await ctx.service.forum.comment.getCommentData(data);
    ctx.body = getData;
  }
  // 获取所有用户的平价论坛
  async getCommentForum() {
    const ctx = this.ctx;
    const data = ctx.request.body;
    const getData = await ctx.service.forum.comment.getCommentForum(data);
    ctx.body = getData;
  }
  // 获取用户论坛的所有评价
  async getUserForumComment() {
    const ctx = this.ctx;
    const data = ctx.request.body;
    const getData = await ctx.service.forum.index.getUserForumData(data);
    const idList = getData.map(item => item.id);
    const commentDate = await ctx.service.forum.comment.getCommentData({
      commentForumId: idList,
    });
    ctx.body = commentDate;
  }
  async updateUserForumComment() {
    const ctx = this.ctx;
    const data = ctx.request.body;
    const getData = await ctx.service.forum.index.getUserForumData(data);
    const idList = getData.map(item => item.id);
    const commentDate = await ctx.service.forum.comment.getCommentData({
      commentForumId: idList,
    });
    console.log(commentDate);
    const promiseAll = [];
    commentDate.rows.forEach(item => {
      item.dataValues.warn = 1;
      promiseAll.push(
        new Promise(async res => {
          res(
            await ctx.service.forum.comment.updateCommentData(item.dataValues, {
              commentId: item.dataValues.commentId,
            })
          );
        })
      );
    });
    await Promise.all(promiseAll);
    ctx.body = commentDate;
  }
}
module.exports = commentController;
