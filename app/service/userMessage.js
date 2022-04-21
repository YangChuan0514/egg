'use strict';
const Service = require('egg').Service;
// 点赞
class UserMessageService extends Service {
  async addUserMessageData(obj) {
    try {
      const { ctx } = this;
      const res = await ctx.model.UserMessage.create(obj);
      return res;
    } catch (error) {
      return null;
    }
  }
  async updateUserMessageData(data, obj) {
    try {
      const { ctx } = this;
      const res = await ctx.model.UserMessage.update(data, {
        where: obj,
      });
      return res;
    } catch (error) {
      return null;
    }
  }
  async getUserMessageData(obj) {
    const { ctx } = this;
    const res = await ctx.model.UserMessage.findAll({
      where: obj,
    });
    return res;
  }
}
module.exports = UserMessageService;
