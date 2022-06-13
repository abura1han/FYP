const mongoose = require("mongoose");

const biddingSchema = new mongoose.Schema({
  car: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Car",
  },
  user: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "USER",
  },
  amount: {
    type: Number,
    required: true,
  },
});

const Bidding = mongoose.model("Bidding", biddingSchema);

module.exports = Bidding;
