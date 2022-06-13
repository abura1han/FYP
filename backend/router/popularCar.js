const router = require("express").Router();
const Car = require("../model/Car");

router.get("/popular-cars", async (req, res) => {
  try {
    const popularCars = await Car.find({ isPending: false }).limit(10);

    res.status(200).json({ success: true, statusCode: 200, data: popularCars });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, statusCode: 500, error: error.message });
  }
});

module.exports = router;
