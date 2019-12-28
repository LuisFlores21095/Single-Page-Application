const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const db = require("./config/database")

  db.authenticate()
  .then(()=> console.log("Database connected..."))
  .catch(err=>console.log("Error: " + err))

app.get("/", (req, res)=> res.send("Index"));

  app.use("/book", require("./routes/Book"));


const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log('Server started on port' + PORT));
