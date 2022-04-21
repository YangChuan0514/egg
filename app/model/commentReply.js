'use strict';

module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize;

  const CommentReply = app.model.define('commentReply', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    userId: INTEGER(11),
    cruserId: INTEGER(11),
    content: STRING(255),
    commentId: INTEGER(11),
    newTime: INTEGER(11),
    warn: INTEGER(11),
    image: STRING(255),
  });
  return CommentReply;
};
