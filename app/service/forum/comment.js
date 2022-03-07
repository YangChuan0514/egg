'use strict';
const Service = require('egg').Service;
// 点赞
class CommentService extends Service {
  async addCommentData(obj) {
    try {
      const { ctx } = this;
      console.log(obj);
      obj.commentImg = obj.commentImg.join(',');
      const res = await ctx.model.Comment.create(obj);
      return res;
    } catch (error) {
      return null;
    }
  }
  async updateCommentData(obj) {
    const { ctx } = this;
    const res = await ctx.model.Comment.update({ where: obj });
    return res;
  }
  async deleteCommentData(obj) {
    const { ctx } = this;
    const res = await ctx.model.Comment.destroy({ where: obj });
    return res;
  }
  // 获取某个用户的所有评价
  async getCommentData(obj) {
    const { ctx } = this;
    const res = await ctx.model.Comment.findAndCountAll({ where: obj });
    return res;
  }
  // 获取某个用户的所有评价的论坛
  async getCommentForum(obj) {
    const { ctx } = this;
    const res = await ctx.model.Comment.findAndCountAll({
      include: [
        {
          model: this.app.model.Forum,
          include: [
            {
              model: this.app.model.Comment,
              include: [{ model: this.app.model.UserMessage }],
            },
            { model: this.app.model.Dianzan },
            { model: this.app.model.UserMessage },
          ],
        },
      ],
      where: obj,
    });
    res.forEach(item => {
      if (item.commentImg) {
        item.commentImg = item.commentImg.split(',');
      }
    });
    return res;
  }
}
module.exports = CommentService;
