"use strict";
const Service = require("egg").Service;
// 点赞
class CollectService extends Service {
  async addCollectData(obj) {
    try {
      const { ctx } = this;
      const res = await ctx.model.Collect.create(obj);
      return res;
    } catch (error) {
      return null;
    }
  }
  async deleteCollectData(obj) {
    const { ctx } = this;
    const res = await ctx.model.Collect.destroy({ where: obj });
    return res;
  }
  async getCollectData(obj) {
    const { ctx } = this;
    const res = await ctx.model.Collect.findAll({ where: obj });
    return res;
  }
  async getCollectForum(obj) {
    const { ctx } = this;
    const res = await ctx.model.Collect.findAll({
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
    const resArr = [];
    res.forEach(item => {
      if (item.forum) {
        resArr.push(item.forum);
      }

    });
    return resArr;
  }
}
module.exports = CollectService;
