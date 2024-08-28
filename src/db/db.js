const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "belajar_db_http",
});

conn.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Connection Succes");
});

module.exports = conn;
