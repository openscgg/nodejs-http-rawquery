const db = require("./db");

const newTable = `create table user (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(255),
  email varchar(255),
  password varchar(255),
  PRIMARY KEY(id)
)`;

db.query(newTable, (err, result) => {
  if (err) {
    throw err;
  }
  console.log("succes create table");
});
