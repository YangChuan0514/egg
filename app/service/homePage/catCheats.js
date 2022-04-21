'use strict';
const Service = require('egg').Service;
// 秘籍
class catCheatService extends Service {
  // 查找所有某个类型秘籍，或者全部秘籍
  async catCheatDataFindAll(obj) {
    try {
      const res = await this.ctx.model.CatCheats.findAll({
        where: obj,
      });
      return res;
    } catch (error) {
      return null;
    }
  }
  async catCheatDataFind(obj) {
    try {
      const res = await this.ctx.model.CatCheats.findAll({
        where: {
          $or: [
            { title: { $like: `%${obj.search || ''}%` } },
            { content: { $like: `%${obj.search || ''}%` } },
          ],
        },
      });
      return res;
    } catch (error) {
      return null;
    }
  }
}

module.exports = catCheatService;
