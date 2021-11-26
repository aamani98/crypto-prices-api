const User = require("../models/User");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  try {
    const user = req.body;
    let userfound = await User.findOne({ email: user.email });
    if (userfound) {
      res.status(400).send({ message: "User already exists" });
      return;
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);
    const newUser = await User.create({ ...user, password: hash });
    const payload = { user: newUser._id };

    jwt.sign(payload, process.env.JWT_SECRET, (err, token) => {
      if (err) throw err;
      res.status(201).json({ token, message: "User Registered Sucessfully" });
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Server Error" });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userfound = await User.findOne({ email }).select("+password");
    if (!userfound) {
      res.status(400).json({ message: "Invalid Credentials" });
      return;
    }
    const isMatch = await bcrypt.compare(password, userfound.password);
    if (!isMatch) {
      res.status(400).json({ message: "Invalid Credentials" });
      return;
    }
    const paylod = { user: userfound._id };
    jwt.sign(paylod, process.env.JWT_SECRET, (err, token) => {
      if (err) throw err;
      res.status(200).json({ token, message: "User Logged In Successfully" });
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Server Error" });
  }
};

module.exports = { registerUser, loginUser };
