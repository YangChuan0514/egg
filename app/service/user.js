'use strict';
const Service = require('egg').Service;
class userService extends Service {
  async addUserData(obj) {
    try {
      const app = this.app;
      const res = await app.mysql.insert('user', obj);
      return res;
    } catch (error) {
      return null;
    }
  }
  async updatedUserData(obj) {
    try {
      const app = this.app;
      const res = await app.mysql.update('user', obj);
      return res;
    } catch (error) {
      return null;
    }

  }
  async getUserData() {
    try {
      const app = this.app;
      const res = await app.mysql.select('user');
      return res;
    } catch (error) {
      return null;
    }
  }
}
module.exports = userService;
