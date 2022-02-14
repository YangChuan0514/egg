'use strict';

const Controller = require('egg').Controller;

class GirlController extends Controller {
  async add() {
    const ctx = this.ctx;
    const params = {
      name: 'wangwu',
    };
    const res = await ctx.service.testdb.add(params);
    ctx.body = res;
  }
  async updated() {
    const ctx = this.ctx;
    const params = {
      id: 1,
      name: '123',
    };
    const res = await ctx.service.testdb.updated(params);
    ctx.body = res;
  }
  async del() {
    const ctx = this.ctx;
    const id = { id: 2 };
    const res = await ctx.service.testdb.del(id);
    ctx.body = res;
  }
  async get() {
    const ctx = this.ctx;
    const res = await ctx.service.testdb.get();
    ctx.body = res;
  }
}

module.exports = GirlController;
