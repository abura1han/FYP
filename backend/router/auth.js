const express = require("express");
const router = express.Router();
const dotenv = require("dotenv");
const crypto = require("crypto");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authenticate = require("../middleware/authenticate");
const cookieParser = require("cookie-parser");

const bodyParser = require("body-parser");

router.use(cookieParser());

const nodemailer = require("nodemailer");
const sendgridTransport = require("nodemailer-sendgrid-transport");
// const {SENDGRID_API,EMAIL} = require('../config/keys');

dotenv.config({ path: "./config.env" });
const SENDGRID_API = process.env.SENDGRID_API;
// const EMAIL = process.env.EMAIL;

const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key: SENDGRID_API,
    },
  })
);

require("../db/conn");
const User = require("../model/userSchema");

const path = require("path");
router.use("/uploads", express.static("../frontend/public/uploads"));

router.get("/", (req, res) => {
  res.send(`Hello Rahul from the server router`);
});

//THROUGH PROMISES
//post is used when we need data, filled by user
// router.post('/register', (req,res) => {

//     //getting data filled by user
//     const {firstname, lastname, gender, email, phone, password, confirmpassword} = req.body;

//     //if any of these field is unfilled, user gets "validation error", its ES6 destructuring
//     if(!firstname || !lastname || !gender || !email || !phone || !password || !confirmpassword) {
//         return res.status(422).json({error:"Please fill out all the fields"});
//     }

//     //checking if registered email (left one) is matching new email being registered ( right one), if yes, same email cant be registered.
//     User.findOne({email:email}) //then uses promises
//     .then((userExist) => {
//         if (userExist) { //if user exists already, we get out from function.
//             return res.status(422).json({error:"Email already registered."});
//         }

//         // and if new registration happens, we need to create data for User
//         const user = new User({firstname, lastname, gender, email, phone, password, confirmpassword});

//         user.save().then(() => {
//             res.status(201).json({ message: "User registered successfully"});
//         }).catch((err) => res.status(500).json({error: "Registration failed"}));
//     }).catch(err => {console.log(err);});

// });

//through ASYNC AWAIT (advanced JS)

// register route
router.post("/register", async (req, res) => {
  //getting data filled by user
  const {
    firstname,
    lastname,
    gender,
    email,
    phone,
    password,
    confirmpassword,
  } = req.body;

  //if any of these field is unfilled, user gets "validation error", its ES6 destructuring
  if (
    !firstname ||
    !lastname ||
    !gender ||
    !email ||
    !phone ||
    !password ||
    !confirmpassword
  ) {
    return res.status(422).json({ error: "Please fill out all the fields" });
  }

  try {
    //checking if registered email (left one) is matching new email being registered ( right one), if yes, same email cant be registered.
    const userExist = await User.findOne({ email: email }); //then uses promises

    if (userExist) {
      //if user exists already, we get out from function.
      return res.status(422).json({ error: "Email already registered." });
    } else if (password != confirmpassword) {
      return res.status(422).json({ error: "Passwords not matching" });
    } else {
      const user = new User({
        firstname,
        lastname,
        gender,
        email,
        phone,
        password,
        confirmpassword,
      });

      const userRegister = await user.save(); //middleware for bcrypt

      transporter.sendMail({
        to: user.email,
        from: "cs1812129@szabist.pk",
        subject: "signup success",
        html: "<h1>welcome to pakdrive</h1>",
        text: "You can buy cars here",
      });
      res.status(201).json({ message: "User registered successfully" });
    }
  } catch (err) {
    console.log(err);
  }
});

// login route
router.post("/login", async (req, res) => {
  try {
    let token;
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "please fill all fields" });
    }
    //await waits for response to save or reject
    const userLogin = await User.findOne({ email: email });

    // console.log(userLogin);

    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password); //if password of found email in "userLogin" matches pw

      if (isMatch) {
        token = await userLogin.generateAuthToken();
        console.log(token);
      }

      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25892000000), //when to expire the token
        httpOnly: true, //run without secure connection https
      });

      if (!isMatch) {
        res.status(400).json({ error: "wrong id or password" });
      } else {
        res.json({ message: "User Signin successfull" });
      }
    } else {
      res.status(400).json({ error: "wrong id or password" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/reset-password", (req, res) => {
  crypto.randomBytes(32, (err, buffer) => {
    // const { email } = req.body;
    if (err) {
      console.log(err);
    }

    const token = buffer.toString("hex"); //generating token so user can change pass within given time (1 hour )
    User.findOne({ email: req.body.email })
      // User.findOne({ email:email });
      .then((user) => {
        if (!user) {
          return res
            .status(422)
            .json({ error: "User dont exists with that email" });
        }
        user.resetToken = token;
        user.expireToken = Date.now() + 3600000;
        user.save().then((result) => {
          transporter.sendMail({
            to: user.email,
            from: "cs1812129@szabist.pk",
            subject: "password reset",
            html: `
                    <p>You requested for password reset</p>
                    <h5>click in this <a href="http://localhost:3000/reset/${token}">link</a> to reset password</h5>
                    `,
          });
          res.json({ message: "check your email" });
        });
      });
  });
});

router.post("/new-password", (req, res) => {
  const newPassword = req.body.password;
  const sentToken = req.body.token;
  User.findOne({ resetToken: sentToken, expireToken: { $gt: Date.now() } })
    .then((user) => {
      if (!user) {
        return res.status(422).json({ error: "Try again session expired" });
      }
      bcrypt.hash(newPassword, 10).then(() => {
        user.password = newPassword;
        user.resetToken = undefined;
        user.expireToken = undefined;
        user.save().then((saveduser) => {
          res.json({ message: "password updated success" });
        });
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/profile", authenticate, (req, res) => {
  //middleware goes to verify before going in PROFILE page
  console.log(`Hello profile`);
  res.send(req.rootUser); //sending whole registration data of user to profile.js await function
});

router.get("/getdata", authenticate, (req, res) => {
  //middleware goes to verify
  console.log(`Hello `);
  res.send(req.rootUser); //sending whole registration data of user to profile.js await function
});

router.post("/ContactUs", authenticate, async (req, res) => {
  //middleware goes to verify before going in PROFILE page
  try {
    //getting data
    const { firstname, lastname, email, phone, message, subject } = req.body;

    if (!firstname || !lastname || !email || !phone || !message || !subject) {
      console.log("error in contact us form");
      return res.json({ error: "please fill the contact form properly" });
    }

    const userContact = await User.findOne({ _id: req.userID }); // checking if user exists, we save message with his data in db

    if (userContact) {
      const userMessage = await userContact.addMessage(
        firstname,
        lastname,
        email,
        phone,
        message,
        subject
      );

      await userContact.save();

      res.status(201).json({ message: "Contact us successful" });
    }
  } catch (error) {
    console.log(error);
  }
});
//logout page
router.get("/logout", (req, res) => {
  //middleware goes to verify before going in PROFILE page
  console.log(`Hello my logout page `);
  res.clearCookie("jwtoken", { path: "/" }); //clearing the cookie
  res.status(200).send("User Logout"); //sending whole registration data of user to profile.js await function
});
//Contact Us page

// making photo upload article route

// const storage = multer.diskStorage({
//   destination: (req, file, callback) => {
//     callback(null, "./frontend/public/uploads"); //destination of uploads
//   },
//   filename: (req, file, callback) => {
//     callback(null, file.originalname); //naming image its original name
//   }
// })

// const upload = multer({storage: storage});

// router.get("/profile", (req, res) => {
//   Articles.find()
//     .then((article) => res.json(article))
//     .catch((err) => res.status(400).json(`Error: ${err}`));
// })

// router.post("/add", upload.single("articleImage"), (req, res) => {
//  const newArticle = new Articles ({
//    title: req.body.title,
//    article: req.body.article,
//    authorname: req.body.authorname,
//    articleImage: req.file.originalname

//  });

// newArticle
//  .save()
//  .then(() => res.json ("New Article posted!"))
//  .catch((err) => res.status(400).json (`Error: ${err}`));
// });

// //REQUEST FIND ARTICLE BY ID
// router.get("/:id", (req, res) => {
//   Articles.findById(req.params.id)
//   .then((article) => res.json(article))
//   .catch((err) => res.status(400).json(`Error: ${err}`));
// });

// // REQUEST FIND ARTICLE BY ID AND UPDATE
// router.put("/update/:id", upload.single("articleName"), (req, res) => {
//   Articles.findById(req.params.id)
//     .then((article) => {
//       article.title = req.body.title;
//       article.article = req.body.article;
//       article.authorname = req.body.authorname;
//       article.articleImage = req.file.originalname

//       article
//         .save()
//         .then(() => res.json("Article UPDATED!"))
//         .catch((err) => res.status(400).json(`Error: ${err}`));
//     })
//         .catch((err) => res.status(400).json(`Error: ${err}`));
// });

// const storage = multer.diskStorage({
//   destination: function(req, file, cb) {
//     // cb(null, path.resolve(__dirname, `..${path.sep}..${path.sep}`, `${path.sep}frontend${path.sep}public${path.sep}uploads`)); //destination of uploads
//     cb(null, '../frontend/public/uploads');
//   },

//   filename: function(req, file, cb) {
//     cb(null, uuidv4() + '_' + Date.now() + path.extname(file.originalname));
//   }
// });

// const fileFilter = (req, file, cb) => {
//   const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
//   if(allowedFileTypes.includes(file.mimetype)) {
//     cb(null, true);
//   } else {
//     cb(null, false);
//   }
// }

// let upload = multer({ storage, fileFilter });

// // router.route("/add").post(upload.single("photo"), (req, res) => {

//   router.route("/add").post(upload.single("photo"), (req, res) =>  {
//  const newUser = new Articles ({
//    photo: req.body.photo,

//  });

// newUser
//  .save()
//  .then(() => res.json ("New Photo posted!"))
//  .catch((err) => res.status(400).json (`Error: ${err}`));
// });

// router.route('/rec').get((req,res) => {
//   User.find()
//       .then(user => res.json(user))
//       .catch(err => res.status(400).json('Error: ' + err));
// });

// let's try it first set simple response

module.exports = router;
