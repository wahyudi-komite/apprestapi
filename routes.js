"use strict";

module.exports = function (app) {
  var jsonku = require("./controller");
  app.route("/").get(jsonku.index);

  app.route("/all").get(jsonku.showAll);
  app.route("/get/:id").get(jsonku.showUsers);
};
