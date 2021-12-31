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
  config.keys = appInfo.name + '_1635216156990_8940';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  // 关闭CSRF
  config.security = {
    csrf: {
      enable: false,
    },
  };

  config.sequelize = {
    dialect: "mysql",// 数据库类型
    host: "127.0.0.1",// host
    port: 3306,// 端口号
    username: "root",// 用户名
    password: "root",// 密码
    database: "shop"// 数据库名
  }

  config.view = {
      defaultViewEngine: 'ejs',
      defaultExtension: '.ejs'
  }

  return {
    ...config,
    ...userConfig,
  };
};
