'use strict';

const Controller = require('egg').Controller;

class commentReplyController extends Controller {
  async addCommentReply() {
    const ctx = this.ctx;
    const data = ctx.request.body;
    const getData = await ctx.service.forum.commentReply.addCommentData(data);
    ctx.body = getData;
  }
  async deleteCommentReply() {
    const ctx = this.ctx;
    const data = ctx.request.body;
    const getData = await ctx.service.forum.commentReply.deleteCommentData(data);
    ctx.body = getData;
  }
}
module.exports = commentReplyController;
