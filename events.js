exports.handlers = {
  jsdocCommentFound: function (e) {
    e.comment = e.comment.replace('@uri', '@method');
  }
};