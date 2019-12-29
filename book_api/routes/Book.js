const express = require("express");
const router = express.Router();
const db = require("../config/database");
const Book_api_db = require("../models/book_api_db");

// router.get('/', (req, res)=> res.send("GiGS"));

router.get("/", (req, res)=>
Book_api_db.findAll({
  
})
.then(respone => {
    console.log(respone);
  res.send(respone);
})
.catch(err => console.log(err))
);



module.exports =router;