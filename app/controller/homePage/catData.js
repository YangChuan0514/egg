'use strict';

const Controller = require('egg').Controller;

class catDataController extends Controller {
  async catDataFindAll() {
    const ctx = this.ctx;
    const data = ctx.request.body;
    const getData = await ctx.service.homePage.catData.catDataFindAll(data);
    ctx.body = getData;
  }
  async catDataFind() {
    const ctx = this.ctx;
    const data = ctx.request.body;
    const getData = await ctx.service.homePage.catData.catDataFind(data);
    ctx.body = getData;
  }
}
module.exports = catDataController;
