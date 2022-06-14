const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const path = require("path");
app.use(cookieParser());

const cors = require("cors");
const helmet = require("helmet");

dotenv.config({ path: "./config.env" });

require("./db/conn");
// const User = require('./model/userSchema');

//converting data of JSON form in print through postman

// const static_path = path.join(__dirname, "./frontend/public/uploads");
// app.use(express.static(static_path));

app.use(express.static(path.resolve(__dirname, "uploads")));
app.use(cors());
app.use(express.json());
app.use(helmet());

app.use(require("./router/auth"));
app.use(require("./router/uploadProfilePic"));
app.use(require("./router/createAd"));
app.use(require("./router/carParts"));
app.use(require("./router/search"));
app.use(require("./router/popularCar"));
app.use(require("./router/fileUpload"));
app.use(require("./router/bidding"));
app.use(require("./router/car"));
app.use(require("./router/user"));
app.use(require("./router/cartCheckout"));

const PORT = process.env.PORT;

// app.get('/about', middleware , (req, res) => {
//     res.send(`Hello Rahul`)
// });

// app.get('/contact', (req, res) => {
//     res.cookie("Test", 'thapa')
//     res.send(`Hello Rahul Register`)
// });

app.get("/register", (req, res) => {
  res.send(`Hello Rahul Register`);
});

app.get("/login", (req, res) => {
  res.send(`Hello Rahul Login`);
});

app.listen(PORT, () => {
  console.log(`server is running at ${PORT} port`);
});
