'use strict';

module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize;

  const Forum = app.model.define('forum', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    userId: INTEGER(18),
    content: STRING(255),
    title: STRING(255),
    img: STRING(255),
    video: STRING(255),
    voice: STRING(255),
    type: STRING(255),
    newTime: INTEGER(20),
    count: INTEGER(11),
  });
  Forum.associate = function() {
    app.model.Forum.hasMany(app.model.Collect, { foreignKey: 'collectForumId' });
    app.model.Forum.hasMany(app.model.Comment, { foreignKey: 'commentForumId' });
    app.model.Forum.hasMany(app.model.Dianzan, { foreignKey: 'dzForumId' });
    app.model.Forum.hasOne(app.model.UserMessage, { sourceKey: 'userId', foreignKey: 'userId' });
  };
  return Forum;
};
