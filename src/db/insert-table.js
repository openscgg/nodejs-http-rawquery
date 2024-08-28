const db = require("./db");
const bcrypt = require("bcrypt");

const saltRounds = 10;

const name = "mewing";
const email = "mewing@gmail.com";
const password = "mewing";

bcrypt.hash(password, saltRounds, (err, hashPassword) => {
  if (err) {
    throw err;
  }

  const newUser = `INSERT INTO user 
    (name, email, password) values (?, ? , ?)`;

  db.query(newUser, [name, email, hashPassword], (err, result) => {
    if (err) {
      throw err;
    }
    console.log("succes insert table");
  });
});
