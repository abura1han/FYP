const router = require("express").Router();
const CarParts = require("../model/CarParts");
const Authenticate = require("../middleware/authenticate");

/**
 * Get all car parts
 */
router.get("/car-parts", async (req, res) => {
  try {
    const carParts = await CarParts.find({});
    res.status(200).send({ success: true, statusCode: 200, data: carParts });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, statusCode: 500, error: error.message });
  }
});

/**
 * Get single car parts by id
 */
router.get("/car-parts/:carId", async (req, res) => {
  const { carId } = req.params;
  try {
    //   If car id is not provided
    if (!carId) {
      return res
        .status(400)
        .json({ success: false, statusCode: 400, error: "Car id is required" });
    }

    const carParts = await CarParts.findById(carId);
    res.status(200).send({ success: true, statusCode: 200, data: carParts });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, statusCode: 500, error: error.message });
  }
});

/**
 * Add new car parts
 */
router.post("/add-car-parts", Authenticate, async (req, res) => {
  const {
    title,
    city,
    category,
    subCategory,
    price,
    description,
    images,
    name,
    phone,
    email,
  } = req.body;
  try {
    // If user is not admin then block access
    if (!req.User.isAdmin) {
      return res.status(401).json({
        success: false,
        statusCode: 401,
        error: "Unauthorized access blocked",
      });
    }

    //   Required data check
    // If not provided then return with 400
    if (!title) {
      res.status(400).json({
        success: false,
        statusCode: 400,
        error: "Title is required to create a car parts post",
      });
    }
    if (!city) {
      res.status(400).json({
        success: false,
        statusCode: 400,
        error: "City is required to create a car parts post",
      });
    }
    if (!category) {
      res.status(400).json({
        success: false,
        statusCode: 400,
        error: "Category is required to create a car parts post",
      });
    }
    // if (!subCategory) {
    //   res.status(400).json({
    //     success: false,
    //     statusCode: 400,
    //     error: "Sub Category is required to create a car parts post",
    //   });
    // }
    if (!price) {
      res.status(400).json({
        success: false,
        statusCode: 400,
        error: "Price is required to create a car parts post",
      });
    }
    if (!description) {
      res.status(400).json({
        success: false,
        statusCode: 400,
        error: "Description is required to create a car parts post",
      });
    }
    if (!images) {
      res.status(400).json({
        success: false,
        statusCode: 400,
        error: "Thumbnails is required to create a car parts post",
      });
    }
    if (!name) {
      res.status(400).json({
        success: false,
        statusCode: 400,
        error: "Name is required to create a car parts post",
      });
    }
    if (!phone) {
      res.status(400).json({
        success: false,
        statusCode: 400,
        error: "Phone is required to create a car parts post",
      });
    }
    if (!email) {
      res.status(400).json({
        success: false,
        statusCode: 400,
        error: "Email is required to create a car parts post",
      });
    }

    //   Crate the post
    const createCarParts = await CarParts.create({
      createdBy: req.User._id,
      title,
      city,
      category,
      subCategory: "",
      price,
      description,
      images,
      name,
      phone,
      email,
    });
    await createCarParts.save();

    res.status(200).json({
      success: true,
      statusCode: 200,
      data: "Car parts added successfully",
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, statusCode: 500, error: error.message });
  }
});

module.exports = router;
