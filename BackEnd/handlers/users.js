const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { authGuard } = require("./authGuard");
const { secretJwt, getUser } = require("./config");
module.exports = (app) => {
  const schema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    phone: String,
    email: String,
    username: String,
    password: { type: String, min: 5 },
    createdTime: { type: Date, default: Date.now() },
  });

  const User = mongoose.model("users", schema);

  app.get("/login", authGuard, async (req, res) => {
    const user = getUser(req);
    res.send(user);
  });

  app.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res
        .status(403)
        .send({ message: "username or password is incorrect" });
    }
    const validate = await bcrypt.compare(password, user.password);
    if (!validate) {
      return res
        .status(403)
        .send({ message: "username or password is incorrect" });
    }
    const userObj = user.toObject();
    delete userObj.password;
    delete userObj.createdTime;
    userObj.token = jwt.sign(userObj, secretJwt, { expiresIn: "1h" });
    res.send(userObj);
  });

  app.post("/signup", async (req, res) => {
    const {
      firstName,
      lastName,
      phone,
      email,
      username,
      password,
      createdTime,
    } = req.body;

    const user = new User({
      firstName,
      lastName,
      email,
      phone,
      username,
      password: await bcrypt.hash(password, 10),
      createdTime,
    });
    const newUser = await user.save();
    res.send({ message: `user ${username} has been created successfully` });
  });
};
