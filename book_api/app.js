const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
require("dotenv").config();


app.use(bodyParser.json());

// const db = require("./config/database")

//   db.authenticate()
//   .then(()=> console.log("Database connected..."))
//   .catch(err=>console.log("Error: " + err))

// app.get("/", (req, res)=> res.send("Index"));

//   app.use("/book", require("./routes/Book"));

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.DATABASE_PW,
  database: "books"
});

app.get("/", (req, res) => {
  res.send("Book pi for project");
});

app.post("/book", (req, res) => {
  let where = "";
  let Category;
  let AuthorName;
  let BookName;
  let wJoin = "";
  let whereCT = "";
  if (req.body.category) {
    Category = "c_Name = " + "'" +req.body.category +"'";
  }
  if (req.body.authorName) {
    AuthorName = "a_Name LIKE " + "'%"+ req.body.authorName+ "%'";
  }
  if (req.body.bookName) {
    BookName = "b_Name LIKE " + "'%" + req.body.bookName +"%'";
  }

  if (Category || AuthorName || BookName) {
    let temp = [Category, AuthorName, BookName].filter(Boolean).join(" and ");
    where = "where " + temp;
  }
  console.log(where);

if(req.body.coverType || req.body.price){
 
  if(req.body.coverType || !req.body.price){
   
    if(where == ""){
    whereCT = "where " + "bt_Name = " + "'" +req.body.coverType +"'";
    } else {
     where = where + "and bt_Name = " + "'" +req.body.coverType +"'";
     
    }
      
  }


}else{
     wJoin =" inner join (Select min(Price) as min, b_ISBN From book_api_db group by b_ISBN) as n on o.b_ISBN = n.b_ISBN and  o.Price = n.min ";
}

  let sql =
    "select o.* from book_api_db as o "+ wJoin + where + whereCT;

  db.query(sql, function(err, result) {
    if (err) throw err;
    res.send(result);
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log("Server started on port " + PORT));
