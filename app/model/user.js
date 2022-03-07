'use strict';

module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize;

  const User = app.model.define('user', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    accountNumber: STRING(18),
    password: STRING(18),
  });
  User.associate = function() {
    app.model.User.hasOne(app.model.UserMessage, { foreignKey: 'userId' });
  };
  return User;
};
