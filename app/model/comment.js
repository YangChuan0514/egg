'use strict';

module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize;

  const Comment = app.model.define('comment', {
    commentId: { type: INTEGER, primaryKey: true, autoIncrement: true },
    userId: INTEGER(18),
    commentForumId: STRING(18),
    commentContent: STRING(255),
    commentImg: STRING(255),
    newTime: INTEGER(20),
    warn: INTEGER(11),
  });
  Comment.associate = function() {
    app.model.Comment.hasOne(app.model.UserMessage, { sourceKey: 'userId', foreignKey: 'userId' });
    app.model.Comment.hasMany(app.model.CommentReply, { foreignKey: 'commentId' });
    app.model.Comment.hasOne(app.model.Forum, { sourceKey: 'commentForumId', foreignKey: 'id' });
  };
  return Comment;
};
