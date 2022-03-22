'use strict';

const Controller = require('egg').Controller;

class dianzanController extends Controller {
  async addDianzan() {
    const ctx = this.ctx;
    const data = ctx.request.body;
    const getData = await ctx.service.forum.dianzan.addDianzanData(data);
    ctx.body = getData;
  }
  async deleteDianzan() {
    const ctx = this.ctx;
    const data = ctx.request.body;
    const getData = await ctx.service.forum.dianzan.deleteDianzanData(data);
    ctx.body = getData;
  }

  // 获取某个用户的所有点赞
  async getDianzanNum() {
    const ctx = this.ctx;
    const data = ctx.request.body;
    const getData = await ctx.service.forum.dianzan.getDianzanNum(data);
    ctx.body = getData;
  }
  // 获取某个用户的所有点赞论坛
  async getDianzanForum() {
    const ctx = this.ctx;
    const data = ctx.request.body;
    const getData = await ctx.service.forum.dianzan.getDianzanForum(data);
    ctx.body = getData;
  }

  // 获取用户的论坛所有点赞
  async getUserDianzanNum() {
    const ctx = this.ctx;
    const data = ctx.request.body;
    const getData = await ctx.service.forum.index.getForumData(data);
    const IdList = getData.map(item => item.id);
    const res = await ctx.service.forum.dianzan.getDianzanNum({
      dzForumId: IdList,
    });
    ctx.body = res;
  }

  async updateDianzanWarn() {
    const ctx = this.ctx;
    const data = ctx.request.body;
    const getData = await ctx.service.forum.index.getForumData(data);
    const IdList = getData.map(item => item.id);
    const res = await ctx.service.forum.dianzan.getDianzanNum({
      dzForumId: IdList,
    });
    const promiseAll = [];
    res.forEach(item => {
      item.dataValues.warn = 1;
      promiseAll.push(
        new Promise(async res => {
          res(
            await ctx.service.forum.dianzan.updateDianzan(item.dataValues, {
              dianzanId: item.dataValues.dianzanId,
            })
          );
        })
      );
    });
    await Promise.all(promiseAll);
    ctx.body = res;
  }
}
module.exports = dianzanController;
