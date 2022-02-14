'use strict';

const Service = require('egg').Service;

class servicemy extends Service {
  async my(id) {
    return {
      id,
      name: '小红',
      age: 18,
    };
  }
}
module.exports = servicemy;
