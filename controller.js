"use strict";

var response = require("./res");
var connection = require("./koneksi");

exports.index = function (req, res) {
  response.ok("Application Works", res);
};

exports.showAll = function (req, res) {
  connection.query("SELECT * FROM users", function (error, rows, fields) {
    if (error) {
      connection.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

exports.showUsers = function (req, res) {
  let id = req.params.id;
  connection.query("SELECT * FROM users WHERE ID =?", [id], function (
    error,
    rows,
    fields
  ) {
    if (error) {
      connection.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};
