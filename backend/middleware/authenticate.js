require("dotenv").config();

const jwt = require("jsonwebtoken");
const User = require("../model/userSchema");

const Authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.jwtoken; // getting jwt token from cookies after login
    const verifyToken = jwt.verify(token, process.env.SECRET_KEY);

    const rootUser = await User.findOne({
      _id: verifyToken._id,
      "tokens.token": token,
    }); //checking if token is there already or not

    if (!rootUser) {
      throw new Error("User not registered");
    }

    req.token = token;
    req.rootUser = rootUser; // rootuser gets all register data from db and we can use it to get info dyanmically
    req.userID = rootUser._id;
    req.User = rootUser;

    next();
  } catch (err) {
    res.status(401).send("Unauthorized.. No token provided");
    console.log(err);
  }
};

module.exports = Authenticate;
