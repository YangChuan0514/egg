'use strict';

module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize;

  const catCheats = app.model.define('catCheats', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    title: STRING(11),
    image: STRING(255),
    content: INTEGER(255),
    data: STRING(255),
  });
  return catCheats;
};
