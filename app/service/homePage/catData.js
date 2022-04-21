'use strict';
const Service = require('egg').Service;
// 秘籍
class catDataService extends Service {
  // 查找所有某个类型秘籍，或者全部秘籍
  async catDataFindAll(obj) {
    try {
      const res = await this.ctx.model.CatData.findAll({
        where: obj,
      });
      return res;
    } catch (error) {
      return null;
    }
  }
  async catDataFind(obj) {
    try {
      const res = await this.ctx.model.CatData.findAll({
        where: {
          $or: [
            { name: { $like: `%${obj.search || ''}%` } },
          ],
        },
      });
      return res;
    } catch (error) {
      return null;
    }
  }
}

module.exports = catDataService;
