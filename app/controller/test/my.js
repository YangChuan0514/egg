'use strict';

const Controller = require('egg').Controller;

class myController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = '<h1>124</h1>';
  }

  async indexMy() {
    const { ctx } = this;
    await new Promise(resolve => {
      setTimeout(() => {
        resolve(ctx.body = '<h1>test</h1>');
      }, 3000);
    });
  }
  /**
   * 随意穿参模式
   */
  async query() {
    const { ctx } = this;
    ctx.body = ctx.query;
  }
  /**
   * 严格穿参数模式
   */
  async params() {
    const { ctx } = this;
    ctx.body = ctx.params;
  }

  /**
   * post请求
   */
  async postRequest() {
    const { ctx } = this;
    ctx.body = {
      status: 200,
      data: ctx.query,
    };
  }
}
module.exports = myController;
