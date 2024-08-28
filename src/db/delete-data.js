const db = require("./db");

const deleteUser = `DELETE FROM user WHERE id=5`;

db.query(deleteUser, (err, result) => {
  if (err) {
    throw err;
  }
  console.log("succes delete user");
});
