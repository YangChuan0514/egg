"use strict";

const Controller = require("egg").Controller;

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
}
module.exports = commentController;
