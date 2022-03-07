'use strict';

module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize;

  const Dianzan = app.model.define('dianzan', {
    dianzanId: { type: INTEGER, primaryKey: true, autoIncrement: true },
    userId: INTEGER(18),
    dzForumId: STRING(18),
    newTime: INTEGER(20),
  });
  Dianzan.associate = function() {
    app.model.Dianzan.hasOne(app.model.Forum, { sourceKey: 'dzForumId', foreignKey: 'id' });
  };
  return Dianzan;
};
