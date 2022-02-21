"use strict";
const Service = require("egg").Service;
class forumService extends Service {
  async addForumData(obj) {
    try {
      const app = this.app;
      const res = await app.mysql.insert("forum", obj);
      return res;
    } catch (error) {
      return null;
    }
  }
  async updatedForumData(obj) {
    try {
      const app = this.app;
      const res = await app.mysql.update("forum", obj);
      return res;
    } catch (error) {
      return null;
    }
  }
  async getForumData() {
    try {
      const app = this.app;
      const res = await app.mysql.select("forum");
      console.log(1111);
      return res;
    } catch (error) {
      return null;
    }
  }
  async deleteForumData(abj) {
    try {
      const app = this.app;
      const res = await app.mysql.delete("forum", abj);
      return res;
    } catch (error) {
      return null;
    }
  }
}
module.exports = forumService;
