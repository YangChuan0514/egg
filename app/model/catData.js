'use strict';

module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize;

  const catData = app.model.define('catData', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING(11),
    image: STRING(255),
    baseInfo: INTEGER(255),
    data: STRING(255),
  });
  return catData;
};
