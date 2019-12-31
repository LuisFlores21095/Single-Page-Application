const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
require("dotenv").config();

app.use(bodyParser.json());

const db = require("./config/database")

//   db.authenticate()
//   .then(()=> console.log("Database connected..."))
//   .catch(err=>console.log("Error: " + err))

// app.get("/", (req, res)=> res.send("Index"));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
      return res.status(200).json({});
  }
  next();
});

  app.use("/book", require("./routes/Book"));

// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: process.env.DATABASE_PW,
//   database: "books"
// });

app.get("/", (req, res) => {
  res.send("Book pi for project");
});



const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log("Server started on port " + PORT));
