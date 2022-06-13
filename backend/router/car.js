const router = require("express").Router();
const Car = require("../model/Car");

/**
 * Get all cars
 * Exclude pending cars
 */
router.get("/cars", async (req, res) => {
  try {
    const cars = await Car.find(
      req.query.type
        ? {
            type: req.query.type,
            isPending: false,
          }
        : { isPending: false }
    );
    res.status(200).json({ success: true, statusCode: 200, data: cars });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, statusCode: 500, error: error.message });
  }
});

/**
 * Get single car by car id
 */
router.get("/car/:carId", async (req, res) => {
  const { carId } = req.params;
  try {
    if (!carId) {
      return res
        .status(400)
        .json({ success: false, statusCode: 400, error: "Car id is required" });
    }
    const car = await Car.findById(carId);

    return res.status(200).json({ success: true, statusCode: 200, data: car });
  } catch (error) {
    res.status(500).json({ success: false, statusCode: 500, error });
  }
});

/**
 * Get all pending posts
 */
router.get("/pending-cars", async (req, res) => {
  try {
    const cars = await Car.find(
      req.query.type
        ? {
            type: req.query.type,
            isPending: true,
          }
        : { isPending: true }
    );
    res.status(200).json({ success: true, statusCode: 200, data: cars });
  } catch (error) {
    res.status(500).json({ success: false, statusCode: 500, error });
  }
});

/**
 * Approve a post/car Ad
 */
router.patch("/approve-car", async (req, res) => {
  const { carId } = req.query;
  try {
    if (!carId) {
      return res.status(400).json({
        success: false,
        statusCode: 400,
        error: "Car id is required to approve a car Ad",
      });
    }

    const approvedCar = await Car.findByIdAndUpdate(
      carId,
      { $set: { isPending: false } },
      { new: true }
    );

    res.status(200).json({ success: true, statusCode: 200, data: approvedCar });
  } catch (error) {
    res.status(500).json({ success: false, statusCode: 500, error });
  }
});

/**
 * Remove a post/car Ad
 */
router.delete("/remove-car", async (req, res) => {
  const { carId } = req.query;
  try {
    if (!carId) {
      return res.status(400).json({
        success: false,
        statusCode: 400,
        error: "Car id is required to remove a car Ad",
      });
    }

    const approvedCar = await Car.findByIdAndDelete(carId);

    res.status(200).json({ success: true, statusCode: 200, data: approvedCar });
  } catch (error) {
    res.status(500).json({ success: false, statusCode: 500, error });
  }
});

module.exports = router;
