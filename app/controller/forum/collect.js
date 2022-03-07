"use strict";

const Controller = require("egg").Controller;

class collectController extends Controller {
  async addCollect() {
    const ctx = this.ctx;
    const data = ctx.request.body;
    const getData = await ctx.service.forum.collect.addCollectData(data);
    ctx.body = getData;
  }
  async deleteCollect() {
    const ctx = this.ctx;
    const data = ctx.request.body;
    const getData = await ctx.service.forum.collect.deleteCollectData(data);
    ctx.body = getData;
  }
  async getCollect() {
    const ctx = this.ctx;
    const data = ctx.request.body;
    const getData = await ctx.service.forum.collect.getCollectData(data);
    ctx.body = getData;
  }
  async getCollectForum() {
    const ctx = this.ctx;
    const data = ctx.request.body;
    const getData = await ctx.service.forum.collect.getCollectForum(data);
    ctx.body = getData;
  }

  // 获取用户的论坛所有点赞
  async getUserCollectNum() {
    const ctx = this.ctx;
    const data = ctx.request.body;
    const getData = await ctx.service.forum.index.getForumData(data);
    const IdList = getData.map((item) => item.id);
    console.log(IdList);
    const res = await ctx.service.forum.collect.getCollectData({
      commentForumId: IdList,
    });
    ctx.body = res;
  }
}
module.exports = collectController;
