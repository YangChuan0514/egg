'use strict';
const Service = require('egg').Service;
class testdbService extends Service {
  async add(obj) {
    try {
      console.log('add');
      const app = this.app;
      const res = await app.mysql.insert('name', obj);
      return res;
    } catch (error) {
      return null;
    }
  }
  async updated(obj) {
    try {
      console.log('update');
      const app = this.app;
      const res = await app.mysql.update('name', obj);
      return res;
    } catch (error) {
      return null;
    }

  }
  async del(id) {
    console.log('del');
    try {
      const app = this.app;
      const res = await app.mysql.delete('name', id);
      return res;
    } catch (error) {
      return null;
    }
  }
  async get() {
    console.log('get');
    try {
      const app = this.app;
      const res = await app.mysql.select('name');
      return res;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}
module.exports = testdbService;
