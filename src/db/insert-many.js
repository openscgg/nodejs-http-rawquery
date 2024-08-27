const db = require("./db");

const newManyUser = `INSERT INTO user (name, email, password) values ?`;
values = [
  ["bima", "bima@gmail.com", "septian123"],
  ["septian", "septian@gmail.com", "septian123"],
  ["lionel", "lionel@gmail.com", "lionel123"],
];

db.query(newManyUser, [values], (err, result) => {
  if (err) {
    throw err;
  }
  console.log("succes insert many");
});
