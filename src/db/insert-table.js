const db = require("./db");

const newUser = `INSERT INTO user 
                  (name, email, password) 
                  values ("ahmad", "ahmad@gmail.com", "ahmad12345")`;
db.query(newUser, (err, result) => {
  if (err) {
    throw err;
  }
  console.log("succes insert table");
});
