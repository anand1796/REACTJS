const bcrypt = require("bcrypt");

const User = require("../model/userModel");

module.exports.register = async (req, res, next) => {
  try {
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
