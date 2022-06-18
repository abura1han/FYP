const mongoose = require("mongoose");
const { Schema } = mongoose;

/**
 * User cars schema
 */
const carSchema = new Schema(
  {
    createdBy: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    isReported: {
      type: Boolean,
      default: false,
    },
    carBrand: {
      type: String,
      required: true,
      trim: true,
    },
    province: {
      type: String,
      required: true,
      trim: true,
    },
    type: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
      trim: true,
    },
    model: {
      type: String,
      required: true,
      trim: true,
    },
    style: {
      type: String,
      required: true,
      trim: true,
    },
    registeredIn: {
      type: String,
      required: true,
      trim: true,
    },
    exteriorColor: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    transmission: {
      type: String,
      required: true,
      trim: true,
    },
    fuel: {
      type: String,
      required: true,
      trim: true,
    },
    engineCC: {
      type: Number,
      required: true,
      trim: true,
    },
    owener: {
      type: String,
      required: true,
      trim: true,
    },
    mileage: {
      type: Number,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    bidding: {
      type: Schema.Types.ObjectId,
    },
    images: [{ type: String, required: true }],
    name: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    isPending: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  {
    //   Enable createdAt, updatedAt
    timestamps: true,
  }
);

const Car = mongoose.model("Car", carSchema);

module.exports = Car;
