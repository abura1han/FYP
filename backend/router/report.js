const router = require("express").Router();
const Authenticate = require("../middleware/authenticate");
const Car = require("../model/Car");

router.get("/report-cars", async (req, res) => {
  try {
    const reportCar = await Car.find({ isReported: true });
    res.status(200).json({
      success: true,
      statusCode: 200,
      data: reportCar,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, statusCode: 500, error: error.message });
  }
});

router.put("/report-car/:carId", Authenticate, async (req, res) => {
  try {
    const reportCar = await Car.findByIdAndUpdate(req.params.carId, {
      $set: { isReported: true },
    });
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Car reported",
      data: reportCar,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, statusCode: 500, error: error.message });
  }
});

router.put("/report-ignore/:carId", Authenticate, async (req, res) => {
  try {
    const reportCar = await Car.findByIdAndUpdate(req.params.carId, {
      $set: { isReported: false },
    });
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Car reported",
      data: reportCar,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, statusCode: 500, error: error.message });
  }
});

module.exports = router;
