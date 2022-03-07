'use strict';

const Controller = require('egg').Controller;

class userController extends Controller {
  // 注册用户
  async addUser() {
    const ctx = this.ctx;
    const data = ctx.request.body;
    if (data.accountNumber.length < 6 || data.accountNumber.length > 18 || data.password.length < 6 || data.password.length > 18) {
      ctx.body = {
        code: -1,
        data: '账号或者密码长度不能超过18位不能少于6位',
      };
      return;
    }
    const getData = await ctx.service.user.getUserData(data);
    if (getData) {
      for (let i = 0; i < getData.length; i++) {
        if (getData[i].accountNumber === data.accountNumber) {
          ctx.body = {
            code: 1,
            data: '账号已经注册',
          };
          return;
        }
      }
    }
    const res = await ctx.service.user.addUserData(data);
    if (res) {
      console.log(res);
      await ctx.service.userMessage.addUserMessageData({
        userId: res.insertId,
        headImg: 'https://img.yzcdn.cn/vant/cat.jpeg',
        nickName: '新用户',
        background: 'https://img.yzcdn.cn/vant/cat.jpeg',
      });
      ctx.body = {
        code: 0,
        data: '注册成功',
      };
    } else {
      ctx.body = {
        code: -1,
        data: '注册失败,请重试',
      };
    }
  }
  // 用户登录
  async getUser() {
    const ctx = this.ctx;
    const data = ctx.request.body;
    if (data.accountNumber.length < 6 || data.accountNumber.length > 18
      || data.password.length < 6 || data.password.length > 18) {
      ctx.body = {
        code: -1,
        data: '账号或者密码输入不正确，请重试',
      };
      return;
    }
    const res = await ctx.service.user.getUserData(data);
    console.log(res);
    if (res) {
      if (!Array.isArray(res)) {
        if (res.accountNumber === data.accountNumber && res.password === data.password) {
          ctx.body = {
            code: 0,
            data: '登录成功',
            id: res.id,
          };
          return;
        }
      }
      for (let i = 0; i < res.length; i++) {
        if (res[i].accountNumber === data.accountNumber && res[i].password === data.password) {
          ctx.body = {
            code: 0,
            data: '登录成功',
            id: res.id,
          };
          return;
        }
      }
      ctx.body = {
        code: 1,
        data: '账号或者密码输入不正确，请重试',
      };
    } else {
      ctx.body = {
        code: -1,
        data: '登录失败，请重试',
      };
    }
  }
  // 用户修改
  async updateUser() {
    const ctx = this.ctx;
    const data = ctx.request.body;
    if (data.accountNumber.length < 6 || data.accountNumber.length > 18
        || data.password.length < 6 || data.password.length > 18
        || data.newPassword.length < 6 || data.newPassword.length > 18) {
      ctx.body = {
        code: -1,
        data: '账号或者密或者新密码长度不能超过18位不能少于6位',
      };
      return;
    }
    const getData = await ctx.service.user.getUserData(data);
    if (getData) {
      for (let i = 0; i < getData.length; i++) {
        if (getData[i].accountNumber === data.accountNumber && getData[i].password === data.password) {
          data.id = getData[i].id;
          if (getData[i].password === data.newPassword) {
            ctx.body = {
              code: 1,
              data: '新密码不可以和旧密码相同',
            };
            return;
          }
        }
      }
      if (!data.id) {
        ctx.body = {
          code: 1,
          data: '账号或者密码输入不正确,请重试',
        };
        return;
      }
    }
    const res = await ctx.service.user.updatedUserData({
      id: data.id,
      accountNumber: data.accountNumber,
      password: data.newPassword,
    });
    if (res) {
      ctx.body = {
        code: 0,
        data: '修改成功',
      };
    } else {
      ctx.body = {
        code: 1,
        data: '修改失败，请重试',
      };
    }
  }
}
module.exports = userController;
