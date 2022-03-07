/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1644200697746_9059';

  // add your middleware config here
  config.middleware = [
    // 'counter',
  ];

  // 配置数据库
  config.mysql = {
    app: true, // 挂载到app上
    agent: false,
    client: {
      host: '127.0.0.1',
      port: '3306',
      user: 'root',
      password: 'root',
      socketPath: '/tmp/mysql.sock',
      database: 'eggVue',
    },
  };
  const Op = require('sequelize').Op;
  config.sequelize = {
    // 数据库类型
    dialect: 'mysql',
    // host
    host: 'localhost',
    // 端口号
    port: '3306',
    // 用户名
    user: 'root',
    // 密码
    password: 'root',
    // 数据库名
    database: 'eggVue',
    // 时区，sequelize有很多自动时间的方法，都是和时区相关的，记得设置成东8区（+08:00）
    timezone: '+08:00',
    define: {
      timestamps: false, // timestamps默认值是true，如实是true会自动添加上 create_time 和update_time两个字段
      freezeTableName: true, // freezeTableName默认值是 false 如果是false的话，会自动在表名后加s复数
    },
    operatorsAliases: {
      $eq: Op.eq,
      $ne: Op.ne,
      $gte: Op.gte,
      $gt: Op.gt,
      $lte: Op.lte,
      $lt: Op.lt,
      $not: Op.not,
      $in: Op.in,
      $notIn: Op.notIn,
      $is: Op.is,
      $like: Op.like,
      $notLike: Op.notLike,
      $iLike: Op.iLike,
      $notILike: Op.notILike,
      $regexp: Op.regexp,
      $notRegexp: Op.notRegexp,
      $iRegexp: Op.iRegexp,
      $notIRegexp: Op.notIRegexp,
      $between: Op.between,
      $notBetween: Op.notBetween,
      $overlap: Op.overlap,
      $contains: Op.contains,
      $contained: Op.contained,
      $adjacent: Op.adjacent,
      $strictLeft: Op.strictLeft,
      $strictRight: Op.strictRight,
      $noExtendRight: Op.noExtendRight,
      $noExtendLeft: Op.noExtendLeft,
      $and: Op.and,
      $or: Op.or,
      $any: Op.any,
      $all: Op.all,
      $values: Op.values,
      $col: Op.col,
    },
  };

  // csrf enable false
  config.security = {
    csrf: {
      enable: false,
    },
  };

  config.view = {
    mapping: {
      '.html': 'ejs',
    },
  };

  config.ejs = {

  };


  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  config.session = {
    key: 'YC_SESS',
    httpOnly: false,
    // maxAge: ,
    renew: true,
  };

  return {
    ...config,
    ...userConfig,
  };
};
