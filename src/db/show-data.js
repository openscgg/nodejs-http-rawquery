const db = require("./db");

const getUser = `SELECT * FROM user`;

db.query(getUser, (err, result) => {
  if (err) {
    throw err;
  }
  console.log(result);
});
