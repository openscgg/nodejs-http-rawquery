const db = require("./db");

const sql = "CREATE DATABASE belajar_db_http";
db.query(sql, (err, result) => {
  if (err) {
    throw err;
  }
  console.log("create database succes");
});
