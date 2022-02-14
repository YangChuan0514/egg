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
      database: 'egg',
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
