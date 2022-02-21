'use strict';

const Controller = require('egg').Controller;

class forumController extends Controller {
  async addForum() {
    const ctx = this.ctx;
    const data = ctx.request.body;
    console.log(data);
    const getData = await ctx.service.forum.index.addForumData(data);
    ctx.body = getData;
  }
  async getForum() {
    const ctx = this.ctx;
    const getData = await ctx.service.forum.index.getForumData();
    ctx.body = getData;
  }
  async updateForum() {
    const ctx = this.ctx;
    const data = ctx.request.body;
    const getData = await ctx.service.forum.index.updatedForumData(data);
    ctx.body = getData;
  }
  async deleteForum() {
    const ctx = this.ctx;
    const data = ctx.request.body;
    const getData = await ctx.service.forum.index.deleteForumData(data);
    ctx.body = getData;
  }
}
module.exports = forumController;
