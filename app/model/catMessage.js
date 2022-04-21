'use strict';

module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize;

  const CatMessage = app.model.define('catMessage', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    userId: INTEGER(11),
    newTime: INTEGER(11),
    headImg: STRING(255),
    name: STRING(255),
    describe: STRING(255),
    variety: STRING(255),
    timeBirth: INTEGER(11),
    sex: STRING(255),
    sterilization: STRING(255),
    tab: STRING(255),

  });
  CatMessage.associate = function() {
    app.model.CatMessage.hasOne(app.model.UserMessage, { sourceKey: 'userId', foreignKey: 'userId' });
  };
  return CatMessage;
};
