const bcrypt = require("bcrypt");

const User = require("../model/userModel");

module.exports.register = async (req, res, next) => {
  try {
    console.log(req.body);
    const { username, email, password } = req.body;

    const checkUser = await User.findOne({ username });
    if (checkUser) {
      return res.json({ msg: "Username already used", status: false });
    }

    const checkEmail = await User.findOne({ email });
    if (checkEmail) {
      return res.json({ msg: "Email already used", status: false });
    }

    const hashPasswd = await bcrypt.hash(password, 10);
    const user = await User.create({
      username,
      email,
      password: hashPasswd,
    });
    delete user.password;
    return res.json({ status: true, user });
  } catch (error) {
    next(error);
  }
};

module.exports.login = async (req, res, next) => {
  try {
    console.log(req.body);
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) {
      return res.json({ msg: "Incorrect Username", status: false });
    }

    const validPasswd = await bcrypt.compare(password, user.password);
    if (!validPasswd) {
      return res.json({ msg: "Incorrect Password", status: false });
    }
    return res.json({ status: true, user });
  } catch (error) {
    next(error);
  }
};
