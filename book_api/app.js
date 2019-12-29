const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
// const db = require("./config/database")

//   db.authenticate()
//   .then(()=> console.log("Database connected..."))
//   .catch(err=>console.log("Error: " + err))

// app.get("/", (req, res)=> res.send("Index"));

//   app.use("/book", require("./routes/Book"));

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "2597220Lf!",
  database: "books"
});

app.get("/", (req, res) => {
    res.send("Book pi for project");
});

app.get("/book", (req, res) => {
  let sql = "select o.* from book_api_db as o inner join (Select min(Price) as min, b_ISBN From book_api_db group by b_ISBN) as n on o.b_ISBN = n.b_ISBN and  o.Price = n.min";

  db.query(sql, function(err, result) {
    if (err) throw err;
    res.send(result);
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log("Server started on port" + PORT));
