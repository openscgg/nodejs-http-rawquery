const db = require("./db");

const deleteUser = `DELETE FROM user WHERE id=1`;

db.query(deleteUser, (err, result) => {
  if (err) {
    throw err;
  }
  console.log("succes delete user");
});
