const express = require("express");
const router = express.Router();
const db = require("../config/database");

router.get("/", (req, res) => {
  let sql =
    "select o.* from book_api_db as o Inner Join (Select min(Price) as min, b_ISBN From book_api_db group by b_ISBN) as n on o.b_ISBN = n.b_ISBN and  o.Price = n.min";

  db.query(sql, function(err, result, next) {
    if (err){
      return next(err);
    }
    res.send(result);
  });
});

router.post("/", (req, res, next) => {
  let where = "";
  let Category;
  let AuthorName;
  let BookName;
  let Price;
  let CoverType;
  let wJoin = "";
  let whereCT = "";
  if (req.body.category) {
    Category = "c_Name = " + "'" + req.body.category + "'";
  }
  if (req.body.authorName) {
    AuthorName = "a_Name LIKE " + "'%" + req.body.authorName + "%'";
  }
  if (req.body.bookName) {
    BookName = "b_Name LIKE " + "'%" + req.body.bookName + "%'";
  }

  if (Category || AuthorName || BookName) {
    let temp = [Category, AuthorName, BookName].filter(Boolean).join(" and ");
    where = "where " + temp;
  }
  console.log(where);

  if (req.body.coverType || req.body.price) {
    if (req.body.coverType & !req.body.price) {

      where == ""
        ? (whereCT = "where " + "bt_Name = " + "'" + req.body.coverType + "'")
        : (where = where + "and bt_Name = " + "'" + req.body.coverType + "'");
    } else {

      if (req.body.price) {
        Price = "Price " + "" + req.body.price + "";
      }
      if (req.body.coverType) {
        CoverType = "bt_Name = " + "'" + req.body.coverType + "'";
      }

      let temp = [Price, CoverType].filter(Boolean).join(" and ");
      wJoin =
        " inner join (Select min(Price) as min, b_ISBN From book_api_db where " +
        temp +
        " group by b_ISBN) as n on o.b_ISBN = n.b_ISBN and  o.Price = n.min ";
    }
  } else {
    wJoin =
      " inner join (Select min(Price) as min, b_ISBN From book_api_db group by b_ISBN) as n on o.b_ISBN = n.b_ISBN and  o.Price = n.min ";
  }

  let sql = "select o.* from book_api_db as o " + wJoin + where + whereCT;

  db.query(sql, function(err, result) {
    if (err){
      return next(err);
    }

    res.send(result);
  });
});

module.exports = router;
