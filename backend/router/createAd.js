const router = require("express").Router();
const Car = require("../model/Car");
const Bidding = require("../model/Bidding");
const Authenticate = require("../middleware/authenticate");
const dotenv = require("dotenv");
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

/**
 * Create/post and Ad
 */
router.post("/create-ad", Authenticate, async (req, res) => {
  const {
    carBrand,
    type,
    year,
    model,
    style,
    registeredIn,
    exteriorColor,
    mileage,
    price,
    description,
    images,
    name,
    phone,
    email,
    fuel,
    category,
    transmission,
    owener,
    engineCC,
    province,
  } = req.body;

  try {
    if (!carBrand) {
      return res.status(400).json({
        success: false,
        statusCode: 400,
        error: "Please fillup the required filed carBrand",
      });
    }
    if (!type) {
      return res.status(400).json({
        success: false,
        statusCode: 400,
        error: "Please fillup the required filed type",
      });
    }
    if (!year) {
      return res.status(400).json({
        success: false,
        statusCode: 400,
        error: "Please fillup the required filed year",
      });
    }
    if (!model) {
      return res.status(400).json({
        success: false,
        statusCode: 400,
        error: "Please fillup the required filed model",
      });
    }
    if (!style) {
      return res.status(400).json({
        success: false,
        statusCode: 400,
        error: "Please fillup the required filed style",
      });
    }
    if (!province) {
      return res.status(400).json({
        success: false,
        statusCode: 400,
        error: "Please fillup the required filed province",
      });
    }
    if (!registeredIn) {
      return res.status(400).json({
        success: false,
        statusCode: 400,
        error: "Please fillup the required filed registeredIn",
      });
    }
    if (!fuel) {
      return res.status(400).json({
        success: false,
        statusCode: 400,
        error: "Please fillup the required filed fuel",
      });
    }
    if (!category) {
      return res.status(400).json({
        success: false,
        statusCode: 400,
        error: "Please fillup the required filed category",
      });
    }
    if (!owener) {
      return res.status(400).json({
        success: false,
        statusCode: 400,
        error: "Please fillup the required filed owener",
      });
    }
    if (!transmission) {
      return res.status(400).json({
        success: false,
        statusCode: 400,
        error: "Please fillup the required filed transmission",
      });
    }
    if (!engineCC) {
      return res.status(400).json({
        success: false,
        statusCode: 400,
        error: "Please fillup the required filed engineCC",
      });
    }
    if (!exteriorColor) {
      return res.status(400).json({
        success: false,
        statusCode: 400,
        error: "Please fillup the required filed exteriorColor",
      });
    }
    if (!mileage) {
      return res.status(400).json({
        success: false,
        statusCode: 400,
        error: "Please fillup the required filed mileage",
      });
    }
    if (!price) {
      return res.status(400).json({
        success: false,
        statusCode: 400,
        error: "Please fillup the required filed price",
      });
    }
    if (!description) {
      return res.status(400).json({
        success: false,
        statusCode: 400,
        error: "Please fillup the required filed description",
      });
    }
    if (!images) {
      return res.status(400).json({
        success: false,
        statusCode: 400,
        error: "Please fillup the required filed images",
      });
    }
    if (!phone) {
      return res.status(400).json({
        success: false,
        statusCode: 400,
        error: "Please fillup the required filed phone",
      });
    }
    if (!email) {
      return res.status(400).json({
        success: false,
        statusCode: 400,
        error: "Please fillup the required filed email",
      });
    }
    if (!name) {
      return res.status(400).json({
        success: false,
        statusCode: 400,
        error: "Please fillup the required filed name",
      });
    }

    console.log(req.files);

    const car = await Car.create({
      createdBy: req.User._id,
      carBrand,
      type,
      engineCC: parseInt(engineCC),
      fuel,
      transmission,
      owener,
      category,
      year,
      model,
      style,
      registeredIn,
      exteriorColor,
      mileage,
      price: Number(price),
      description,
      images,
      name,
      phone,
      email,
      province,
    });

    await car.save();

    transporter.sendMail({
      to: req.User.email,
      from: "cs1812129@szabist.pk",
      subject: "New car posted on MERN-PAKDRIVE",
      html: "<h1>welcome to pakdrive <br /> A new car posted. Review the post and approve or dicile the post</h1>",
      text: "A new car posted. Review the post and approve or dicile the post",
    });

    res.status(200).json({
      success: true,
      statusCode: 200,
      data: car,
      message: "Ad posted successfully",
    });
  } catch (error) {
    console.error(error.message);
    res
      .status(500)
      .json({ success: false, statusCode: 500, error: error.message });
  }
});

module.exports = router;
