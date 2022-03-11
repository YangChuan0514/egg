'use strict';
const Service = require('egg').Service;
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
      const res = await ctx.model.UserAttention.destroy({ where: obj });
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
    const res = await ctx.model.UserAttention.findAll({
      include: [
        {
          model: this.app.model.UserMessage,
        },
      ],
      where: obj,
    });
    const isGz = await ctx.model.UserAttentionT.findAll({
      where: { userattId: obj.userId },
    });
    const List1 = isGz.map(item => item.userId);
    console.log(List1);
    console.log(res.map(item => item.userattId));
    res.forEach(item => {
      if (List1.includes(item.userattId)) {
        item.dataValues.gz = true;
        console.log(1);
      } else {
        item.dataValues.gz = false;
        console.log(2);
      }
    });
    return res;
  }
  // 批量更新warn
  async updateUserAttWarn(obj) {
    const { ctx } = this;
    const res = await ctx.model.UserAttention.findAll({ where: obj });
    const promiseAll = [];
    res.forEach(item => {
      item.dataValues.warn = 1;
      promiseAll.push(new Promise(res => {
        res(ctx.model.UserAttention.update(item.dataValues, { where: { id: Number(item.dataValues.Id) } }));
      }));
    });
    await Promise.all(promiseAll);
    return res;
  }
}
module.exports = UserAttentionService;
