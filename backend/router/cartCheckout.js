const router = require("express").Router();
const Authenticate = require("../middleware/authenticate");
const nodemailer = require("nodemailer");
const sendgridTransport = require("nodemailer-sendgrid-transport");

require("dotenv").config();
const SENDGRID_API = process.env.SENDGRID_API;
// const EMAIL = process.env.EMAIL;

const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key: SENDGRID_API,
    },
  })
);

router.post("/cart-checkout", Authenticate, async (req, res) => {
  try {
    transporter.sendMail({
      to: req.body.email,
      from: "cs1812129@szabist.pk",
      subject: "Your cart checkout successful",
      html: `<h1>Pakdrive <br /><h2>Total: ${req.body.totalPrice}</h2></h1>`,
      text: "Your cart checkout successful",
    });

    res
      .status(200)
      .json({ success: true, statusCode: 200, data: "Cart checked out" });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, statusCode: 500, error: err.message });
  }
});

module.exports = router;
