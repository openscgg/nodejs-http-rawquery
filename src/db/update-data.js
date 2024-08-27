const db = require("./db");

const updateUser = `UPDATE user SET name="AhmadBhima" WHERE id=1`;

db.query(updateUser, (err, result) => {
  if (err) {
    throw err;
  }
  console.log("succes update user");
});
