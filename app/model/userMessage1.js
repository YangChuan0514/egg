'use strict';

module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize;
  const UserMessage1 = app.model.define('userMessage', {
    uId: { type: INTEGER, primaryKey: true, autoIncrement: true },
    userId: INTEGER(11),
    headImg: STRING(255),
    nickName: STRING(255),
    sex: STRING(255),
    birthday: INTEGER(255),
    school: STRING(255),
    information: STRING(255),
    background: STRING(255),
    location: STRING(255),
    qq: INTEGER(11),
    wx: STRING(255),
  }, { timestamps: false });
  return UserMessage1;
};
