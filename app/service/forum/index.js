'use strict';
const Service = require('egg').Service;
// 论坛
class forumService extends Service {
  async addForumData(obj) {
    try {
      obj.img = obj.img.join(',');
      obj.video = obj.video.join(',');
      const res = await this.ctx.model.Forum.create(obj);
      return res;
    } catch (error) {
      return null;
    }
  }
  async updatedForumData(obj) {
    try {
      const res = await this.ctx.model.Forum.update(obj);
      return res;
    } catch (error) {
      return null;
    }
  }
  async getForumData(obj) {
    try {
      const res = await this.ctx.model.Forum.findAll({ where: obj });
      return res;
    } catch (error) {
      return null;
    }
  }
  // 查找全部
  async getForumDataAll(obj) {
    const { ctx } = this;
    const res = await ctx.model.Forum.findAll({
      include: [
        { model: this.app.model.Collect },
        {
          model: this.app.model.Comment,
          include: [{ model: this.app.model.UserMessage }],
        },
        { model: this.app.model.Dianzan },
        { model: this.app.model.UserMessage },
      ],
      order: [
        [ 'newTime', 'DESC' ],
        [ 'comments', 'newTime', 'DESC' ],
      ],
      limit: obj.l, // 每页多少条
      offset: obj.l * (obj.o - 1), // 跳过多少条
    });
    res.forEach(item => {
      if (item.img) {
        item.img = item.img.split(',');
      }
      if (item.video) {
        item.video = item.video.split(',');
      }
      if (item.comments.length) {
        item.comments.forEach(v => {
          if (v.commentImg) {
            v.commentImg = v.commentImg.split(',');
          }
        });
      }
    });
    return res;
  }
  // 模糊搜索
  async getForumDataDim(obj) {
    const { ctx } = this;
    console.log(obj);
    const res = await ctx.model.Forum.findAll({
      include: [
        { model: this.app.model.Collect },
        {
          model: this.app.model.Comment,
          include: [{ model: this.app.model.UserMessage }],
        },
        { model: this.app.model.Dianzan },
        { model: this.app.model.UserMessage },
      ],
      order: [
        [ 'newTime', 'DESC' ],
        [ 'comments', 'newTime', 'DESC' ],
      ],
      limit: Number(obj.l), // 每页多少条
      offset: Number(obj.l * (obj.o - 1)), // 跳过多少条
      where: {
        $or: [
          { title: { $like: `%${obj.search || ''}%` } },
          { content: { $like: `%${obj.search || ''}%` } },
        ],
      },
    });
    return res;
  }
  // 查找某个用户的论坛
  async getUserForumData(obj) {
    const { ctx } = this;
    const res = await ctx.model.Forum.findAll({
      include: [
        { model: this.app.model.Collect },
        {
          model: this.app.model.Comment,
          include: [{ model: this.app.model.UserMessage }],
        },
        { model: this.app.model.Dianzan },
        { model: this.app.model.UserMessage },
      ],
      order: [
        [ 'newTime', 'DESC' ],
        [ 'comments', 'newTime', 'DESC' ],
      ],
      limit: obj.l, // 每页多少条
      offset: obj.l * (obj.o - 1), // 跳过多少条
      where: { userId: obj.userId },
    });
    return res;
  }
  async getUserForumDataId(id) {
    const { ctx } = this;
    const res = await ctx.model.Forum.findAll({
      include: [
        { model: this.app.model.Collect },
        {
          model: this.app.model.Comment,
          include: [{ model: this.app.model.UserMessage }],
        },
        { model: this.app.model.Dianzan },
        { model: this.app.model.UserMessage },
      ],
      where: id,
    });
    res.forEach(item => {
      if (item.img) {
        item.img = item.img.split(',');
      }
      if (item.video) {
        item.video = item.video.split(',');
      }
      if (item.comments.length) {
        item.comments.forEach(v => {
          if (v.commentImg) {
            v.commentImg = v.commentImg.split(',');
          }
        });
      }
    });
    return res;
  }
}

module.exports = forumService;
