const express = require("express");
const router = express.Router();
const db = require("../config/database");
const Price_by_type = require("../models/price_by_type");

// router.get('/', (req, res)=> res.send("GiGS"));

router.get("/", (req, res)=>
Price_by_type.findAll({
  
})
.then(respone => {
    console.log(respone);
  res.send(respone);
})
.catch(err => console.log(err))
);



module.exports =router;