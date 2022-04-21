'use strict';
const Service = require('egg').Service;
// 点赞
class catMessageService extends Service {
  async addCatMessageData(obj) {
    try {
      const { ctx } = this;
      const res = await ctx.model.CatMessage.create(obj);
      return res;
    } catch (error) {
      return null;
    }
  }
  async updateCatMessageData(data, obj) {
    try {
      const { ctx } = this;
      const res = await ctx.model.CatMessage.update(data, {
        where: obj,
      });
      return res;
    } catch (error) {
      return null;
    }
  }
  async deleteCatMessage(data) {
    const { ctx } = this;
    const res = await ctx.model.CatMessage.destroy({ where: data });
    return res;
  }
  async getUserMessageData(obj) {
    const { ctx } = this;
    const res = await ctx.model.CatMessage.findAll({
      where: obj,
    });
    return res;
  }
}
module.exports = catMessageService;
