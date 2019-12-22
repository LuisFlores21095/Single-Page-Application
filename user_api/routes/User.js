const express = require("express");
const router = express.Router();
const Post = require("../models/User");

router.get("/", (req, res) => {
  res.send("We are on posts");
});

router.post("/", async (req, res, next) => {
  const post = new Post({
    FirstName: req.body.FirstName,
    LastName: req.body.LastName,
    StreetAddress: req.body.StreetAddress,
    City: req.body.City,
    State: req.body.State,
    ZipCode: req.body.ZipCode,
    Email: req.body.Email,
    Password: req.body.Password
  });

  try {
    const savedPost = await post.save();
    res.status(200).send({ message: "Successful Register, Please Login" });
  } catch (err) {
    if (err.name === "MongoError" && err.code === 11000) {
      // Duplicate username
      var err = new Error("Email Already Used");
      err.status = 500;
      err.errorCode = 11000;
     return next(err);
    } 
     return next(err);
    
  }
});

module.exports = router;
