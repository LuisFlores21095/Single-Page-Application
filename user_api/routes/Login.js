const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { loginValidation } = require("../joi/Validation");
const bcrypt = require("bcrypt");

router.post("/", async (req, res, next) => {
  const { error } = loginValidation(req.body);
  if (error) {
    return next(error);
  }


  const user = await User.findOne({ email: req.body.email.toLowerCase() });
  if (!user) {
    err = new Error("Email not found");
    err.status = 400;
    return next(err);
  }

  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) {
    err = new Error("Invalid password");
    err.status = 400;
    return next(err);
  }

  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  res.header("auth-token", token).send({token: token});
});

module.exports = router;
