const mysql = require("mysql2");
module.exports = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.DATABASE_PW,
  database: "books"
});
