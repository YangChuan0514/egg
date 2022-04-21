'use strict';

const Controller = require('egg').Controller;

class catCheatsController extends Controller {
  async catCheatDataFindAll() {
    const ctx = this.ctx;
    const data = ctx.request.body;
    const getData = await ctx.service.homePage.catCheats.catCheatDataFindAll(data);
    ctx.body = getData;
  }
  async catCheatDataFind() {
    const ctx = this.ctx;
    const data = ctx.request.body;
    const getData = await ctx.service.homePage.catCheats.catCheatDataFind(data);
    ctx.body = getData;
  }
}
module.exports = catCheatsController;
