'use strict';

module.exports = app => {
  const { STRING, INTEGER, BOOLEAN } = app.Sequelize;

  const Collect = app.model.define('collect', {
    collectId: { type: INTEGER, primaryKey: true, autoIncrement: true },
    userId: INTEGER(18),
    collectForumId: STRING(18),
    newTime: INTEGER(11),
  });
  Collect.associate = function() {
    app.model.Collect.hasOne(app.model.Forum, { sourceKey: 'collectForumId', foreignKey: 'id' });
  };
  return Collect;
};
