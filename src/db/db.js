const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "belajar_db_http",
});

conn.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Connection Succes");
});

module.exports = conn;
