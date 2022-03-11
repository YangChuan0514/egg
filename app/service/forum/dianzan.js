"use strict";
const Service = require("egg").Service;
// 点赞
class dianzanService extends Service {
  async addDianzanData(obj) {
    try {
      const { ctx } = this;
      const res = await ctx.model.Dianzan.create(obj);
      return res;
    } catch (error) {
      return null;
    }
  }

  async deleteDianzanData(obj) {
    const { ctx } = this;
    const res = await ctx.model.Dianzan.destroy({ where: obj });
    return res;
  }
  // 获取用户的所有点赞
  async getDianzanNum(obj) {
    const { ctx } = this;
    const res = await ctx.model.Dianzan.findAll({
      include: [
        {
          model: this.app.model.UserMessage,
        },
      ],
      where: obj,
    });
    return res;
  }
  // 获取用户的所有点赞的论坛
  async getDianzanForum(obj) {
    const { ctx } = this;
    const res = await ctx.model.Dianzan.findAll({
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
    res.forEach((item) => {
      if (item.forum) {
        resArr.push(item.forum);
      }
    });
    return resArr;
  }
}
module.exports = dianzanService;
