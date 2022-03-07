"use strict";

const Controller = require("egg").Controller;

class userMessageController extends Controller {
  async addUserMessage() {
    const ctx = this.ctx;
    const data = ctx.request.body;
    const getData = await ctx.service.userMessage.addUserMessageData(data);
    ctx.body = getData;
  }
  async updateUserMessage() {
    const ctx = this.ctx;
    const data = ctx.request.body;
    const obj = { uId: data.uId };
    const getData = await ctx.service.userMessage.updateUserMessageData(
      data,
      obj
    );
    ctx.body = getData;
  }
  async getUserMessage() {
    const ctx = this.ctx;
    const data = ctx.request.body;
    const getData = await ctx.service.userMessage.getUserMessageData(data);
    ctx.body = getData;
  }
}
module.exports = userMessageController;
