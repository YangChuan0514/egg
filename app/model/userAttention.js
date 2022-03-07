'use strict';

module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize;
  const UserAttention = app.model.define('userAttention', {
    Id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    userId: INTEGER(11),
    userattId: STRING(18),
  });
  UserAttention.associate = function() {
    app.model.UserAttention.hasOne(app.model.UserMessage, { sourceKey: 'userattId', foreignKey: 'userId' });
  };
  return UserAttention;
};
