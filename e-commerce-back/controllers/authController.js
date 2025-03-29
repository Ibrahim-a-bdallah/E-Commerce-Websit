const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const router = express.Router();

// ROUTE FOR REGISTER
router.post("/register", async (req, res) => {
  try {
    const { email, password, firstName, lastName } = req.body;

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = new User({
      email,
      password: hashedPassword,
      firstName,
      lastName,
    });

    const savedUser = await newUser.save();

    const token = jwt.sign({ id: savedUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(201).json({ token, msg: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

// ROUTE FOR LOGIN
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json("This email is not registered");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      const payload = {
        id: user._id,
        email: user.email,
      };

      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: 3600 },
        (error, token) => {
          if (error) throw error;

          res.json({
            token,
            user: {
              id: user._id,
              email: user.email,
              firstName: user.firstName,
              lastName: user.lastName,
            },
          });
        }
      );
    } else {
      return res.status(400).json("Incorrect password");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

// ROUTE FOR CHECK EMAIL AVAILABLE OR NOT
router.get("/", async (req, res) => {
  try {
    const { email } = req.query;
    if (email) {
      const user = await User.findOne({ email });
      if (user) {
        return res.json("Email is already taken");
      }
      res.json("Email is available");
    } else {
      const users = await User.find();
      res.json(users);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

module.exports = router; // استخدام CommonJS بدلاً من export
