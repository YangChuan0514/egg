'use strict';

module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize;
  const UserAttentionT = app.model.define('userAttention', {
    Id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    userId: INTEGER(11),
    userattId: STRING(18),
    warn: INTEGER(11),
    newTime: INTEGER(11),
  });
  UserAttentionT.associate = function() {
    app.model.UserAttentionT.hasOne(app.model.UserMessage, { sourceKey: 'userId', foreignKey: 'userId' });
  };
  return UserAttentionT;
};
