require("dotenv").config();

const mongooose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongooose.Schema(
  {
    profilePic: {
      type: String,
      default: "",
    },
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    password: {
      type: String,
      required: true,
    },
    confirmpassword: {
      type: String,
      required: true,
    },
    resetToken: String,
    expireToken: Date,
    date: {
      type: Date,
      default: Date.now,
    },
    messages: [
      {
        firstname: {
          type: String,
          required: true,
        },
        lastname: {
          type: String,
          required: true,
        },
        email: {
          type: String,
          required: true,
        },
        phone: {
          type: Number,
          required: true,
        },
        message: {
          type: String,
          required: true,
        },
        subject: {
          type: String,
          required: true,
        },
      },
    ],
    tokens: [
      {
        token: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

// const articleSchema = new mongooose.Schema ({
//     title: {
//         type:String,
//         required:true
//     },
//     article: {
//         type: Number,
//         required:true
//     },
//     authorname: {
//         type:String,
//         required:true
//     },
//     articleImage: {
//         type:String,
//         required:true
//     },
//     postDate: {
//         type: Date,
//         default: Date.now
//     },
// });

// hashing password through bcrypt
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    //  console.log(`the current password is ${this.password}`);
    //pw before hash
    this.password = await bcrypt.hash(this.password, 10);
    this.confirmpassword = await bcrypt.hash(this.confirmpassword, 10);
    //  console.log(`the current password is ${this.password}`);
    // pw after hash

    //  this.confirmpassword = undefined;
    // confirm is for user not for db
  }
  next();
});

//  we are generating auth token
userSchema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY); //generating token
    this.tokens = this.tokens.concat({ token: token }); //adding both tokens
    await this.save();
    return token; //returning the token so we get it in cookies
  } catch (err) {
    console.log(err);
  }
};

userSchema.methods.addMessage = async function (
  firstname,
  lastname,
  email,
  phone,
  message,
  subject
) {
  try {
    this.messages = this.messages.concat({
      firstname,
      lastname,
      email,
      phone,
      message,
      subject,
    }); //both key and value are same so we just keep 1 time variable
    await this.save();
    return this.messages;
  } catch (error) {
    console.log(error);
  }
};

const User = mongooose.model("USER", userSchema);

module.exports = User;

// const Articles = mongooose.model('ARTICLES', articleSchema);

// module.exports = Articles;
