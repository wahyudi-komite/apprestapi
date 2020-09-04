var mysql = require("mysql");
const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "restfull",
});

conn.connect((err) => {
  if (err) throw err;
  console.log("Terhubung");
});

module.exports = conn;
