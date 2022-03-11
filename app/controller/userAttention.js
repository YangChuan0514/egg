"use strict";

const Controller = require("egg").Controller;

class userAttentionController extends Controller {
  async addUserAttention() {
    const ctx = this.ctx;
    const data = ctx.request.body;
    const getData = await ctx.service.userAttention.addUserAttentionData(data);
    ctx.body = getData;
  }
  async deleteUserAttention() {
    const ctx = this.ctx;
    const data = ctx.request.body;
    const getData = await ctx.service.userAttention.deleteUserAttentionData(
      data
    );
    ctx.body = getData;
  }
  async userAttentionNum() {
    const ctx = this.ctx;
    const data = ctx.request.body;
    const getData = await ctx.service.userAttention.getUserAttentionData(data);
    ctx.body = getData;
  }
  // 我关注的
  async userAttentionMessage() {
    const ctx = this.ctx;
    const data = ctx.request.body;
    const getData = await ctx.service.userAttention.getUserAttentionMessage(
      data
    );
    ctx.body = getData;
  }
  // 关注我的
  async userAttentionTMessage() {
    const ctx = this.ctx;
    const data = ctx.request.body;
    const getData = await ctx.service.userAttention.getUserAttentionTMessage(
      data
    );
    ctx.body = getData;
  }
  async updateUserAttWarn() {
    const ctx = this.ctx;
    const data = ctx.request.body;
    const getData = await ctx.service.userAttention.updateUserAttWarn(
      data
    );
    ctx.body = getData;
  }
}
module.exports = userAttentionController;
