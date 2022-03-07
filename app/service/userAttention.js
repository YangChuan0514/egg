"use strict";
const Service = require("egg").Service;
// 点赞
class UserAttentionService extends Service {
  async addUserAttentionData(obj) {
    try {
      const { ctx } = this;
      const res = await ctx.model.UserAttention.create(obj);
      return res;
    } catch (error) {
      return null;
    }
  }
  async deleteUserAttentionData(obj) {
    try {
      const { ctx } = this;
      const res = await ctx.model.UserAttention.delete(obj);
      return res;
    } catch (error) {
      return null;
    }
  }
  async getUserAttentionData(obj) {
    const { ctx } = this;
    const res = await ctx.model.UserAttention.findAll({ where: obj });
    return res;
  }
  // 我关注的
  async getUserAttentionMessage(obj) {
    const { ctx } = this;
    const res = await ctx.model.UserAttention.findAll({
      include: [
        {
          model: this.app.model.UserMessage,
        },
      ],
      where: obj,
    });
    return res;
  }
  // 关注我的
  async getUserAttentionTMessage(obj) {
    const { ctx } = this;
    const res = await ctx.model.UserAttentionT.findAll({
      include: [
        {
          model: this.app.model.UserMessage,
        },
      ],
      where: obj,
    });
    return res;
  }
}
module.exports = UserAttentionService;
