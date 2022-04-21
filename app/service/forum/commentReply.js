'use strict';
const Service = require('egg').Service;
// 评论回复
class CommentReplyService extends Service {
  async addCommentData(obj) {
    try {
      const { ctx } = this;
      const res = await ctx.model.CommentReply.create(obj);
      return res;
    } catch (error) {
      return null;
    }
  }
  async deleteCommentData(obj) {
    const { ctx } = this;
    const res = await ctx.model.CommentReply.destroy({ where: obj });
    return res;
  }
}
module.exports = CommentReplyService;
