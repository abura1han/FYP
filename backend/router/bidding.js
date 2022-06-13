const Bidding = require("../model/Bidding");
const router = require("express").Router();
const Authenticate = require("../middleware/authenticate");

// Get bidding bu car id
router.get("/bidding/:carId", async (req, res) => {
  const { carId } = req.params;
  try {
    const bidding = await Bidding.find({ car: carId }).populate("user").populate("car");


    res.status(200).json({ success: true, statusCode: 200, data: bidding });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, statusCode: 500, error: error.message });
  }
});

// Add bidding
router.post("/add-bidding/:carId", Authenticate, async (req, res) => {
  const { carId } = req.params;
  const { amount } = req.body;
  try {
    const addBidding = await Bidding.create({
      car: carId,
      user: req.User._id,
      amount: parseInt(amount),
    });

    await addBidding.save()

    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Bidding updated",
      data: {...addBidding._doc, user: req.User},
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, statusCode: 500, error: error.message });
  }
});

router.put("/update-bidding/:carId", Authenticate, async (req, res) => {
  const { carId } = req.params;
  const { amount } = req.body;

  try {
    const isBiddingExise = await Bidding.findOne({ car: carId, user: req.User._id });

    if (isBiddingExise) {
      await Bidding.findOneAndUpdate({ car: carId, user: req.User._id }, { $set: { amount } }, { new: true });

      const populate = await Bidding.find({ car: carId }).populate("user").populate("car");


      return res.status(200).json({ success: true, statusCode: 200, data: populate });
    } else {
      const addBidding = await Bidding.create({ car: carId, user: req.User._id, amount });
      
      await addBidding.save();

      const populate = await Bidding.find({ car: carId}).populate("user").populate("car");
      return res.status(200).json({ success: true, statusCode: 200, data: populate });
    }

  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, statusCode: 500, error: error.message });
  }
});

router.delete("/remove-bidding/:carId", Authenticate, async (req, res) => {
  const { carId } = req.params;

  try {
    const updateBidding = await Bidding.findOneAndRemove({
      carId,
      userId: req.User._id,
    });

    res.status(200).json({
      success: false,
      statusCode: 500,
      message: "Bidding updated",
      data: updateBidding,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, statusCode: 500, error: error.message });
  }
});

module.exports = router;
