'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    // 调用service内容
    // const id = ctx.query.id;
    // const res = await ctx.service.myService.my(id);
    // ctx.body = res;
    // 使用渲染模版
    const username = ctx.session.username;
    const counter = ctx.session.counter;
    await ctx.render('my.html', {
      newTime: this.app.getTime,
      id: 1000,
      name: '小红',
      age: 18,
      username,
      skills: [
        '泰式按摩',
        '精油搓背',
        'SPA',
      ],
      counter,
    });
  }

  async jsyc() {
    const { ctx } = this;
    ctx.body = '<h1>1234</h1>';
  }
  async add() {
    const { ctx } = this;
    ctx.cookies.set('user', 'yc', {
      httpOnly: true,
      encrypt: true,
      maxAge: 1000 * 10,
    });
    ctx.session.username = 'yc';
    ctx.body = {
      status: 200,
      data: '添加成功',
    };
  }
  async del() {
    const { ctx } = this;
    ctx.cookies.set('user', null);
    ctx.session.username = null;
    ctx.body = {
      status: 200,
      data: '删除成功',
    };
  }
  async edit() {
    const { ctx } = this;
    ctx.session.username = 'lxm';
    ctx.cookies.set('user', 'lxm');
    ctx.body = {
      status: 200,
      data: '修改成功',
    };
  }
  async show() {
    const { ctx } = this;
    const cookies = ctx.cookies.get('user', {
      encrypt: true,
    });
    ctx.body = {
      status: 200,
      data: cookies,
    };
  }
  async newContext() {
    const { ctx } = this;
    ctx.body = 'wqewqewq';
  }
  async newRequest() {
    const { ctx } = this;
    ctx.body = ctx.request.token;
  }
  async newResponse() {
    const { ctx } = this;
    ctx.response.token = 'yc.com';
    const testBase64 = ctx.helper.base64Encode('yc.come');
    ctx.body = testBase64;
  }
}

module.exports = HomeController;
