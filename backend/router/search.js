const router = require("express").Router();
const Car = require("../model/Car");

router.get("/search", async (req, res) => {
  const {
    exteriorColor,
    lower_price,
    upper_price,
    mileage_start,
    mileage_end,
    carBrand,
    registeredIn,
    province,
    owener,
    category,
    fuel,
    transmission,
    upper_engineCC,
    lower_engineCC,
    type,
    style,
    sortBy,
    year_start,
    year_end,
  } = req.query;
  try {
    const cars = await Car.find({
      price: {
        $lte: Number(upper_price ? upper_price : 9999999999999),
        $gte: Number(lower_price ? lower_price : 0),
      },
      engineCC: {
        $lte: Number(upper_engineCC ? upper_engineCC : 9999999999999),
        $gte: Number(lower_engineCC ? lower_engineCC : 0),
      },
      year: {
        $lte: parseInt(year_end || 99999),
        $gte: parseInt(year_start || 0),
      },
      mileage: {
        $lte: parseInt(mileage_end || 9999999999999999),
        $gte: parseInt(mileage_start || 0),
      },
      carBrand: carBrand ? { $in: carBrand.split(",") } : { $regex: "" },
      fuel: fuel ? { $in: fuel.split(",") } : { $regex: "" },
      registeredIn: registeredIn
        ? { $in: registeredIn.split(",") }
        : { $regex: "" },
      type: { $regex: type ? type : "", $options: "i" },
      province: { $regex: province ? province : "", $options: "i" },
      style: { $regex: style ? style : "", $options: "i" },
      exteriorColor: { $regex: exteriorColor || "", $options: "i" },
      transmission: transmission
        ? { $in: transmission.split(",") }
        : { $regex: "" },
      owener: owener ? { $in: owener.split(",") } : { $regex: "" },
      category: { $regex: category ? category : "", $options: "i" },
      isPending: false,
    }).sort({ updatedAt: sortBy ? parseInt(sortBy) : 1 });

    res.status(200).json({ success: true, statusCode: 200, data: cars });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, statusCode: 500, error: error.message });
  }
});

module.exports = router;
