exports.defineTags = function (dictionary) {
  dictionary.defineTag("response", {
    canHaveType: true,
    canHaveName: true,
    onTagged: function (doclet, tag) {
      if (typeof doclet.response === 'undefined') {
        doclet.response = []
      }
      doclet.response.push(tag.value)

    }
  });
};