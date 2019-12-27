const express = require("express");
const router = express.Router();
const User = require("../models/User");
const {registerValidation} = require("../joi/Validation");


router.post("/", async (req, res, next) => {

  const {error} = registerValidation(req.body);
    if (error) {
        
        return next(error);
    }

  const post = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    streetAddress: req.body.streetAddress,
    city: req.body.city,
    state: req.body.state,
    zipCode: req.body.zipCode,
    email: req.body.email.toLowerCase(),
    password: req.body.password
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
