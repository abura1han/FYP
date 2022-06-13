const mongoose = require("mongoose");
const { Schema } = mongoose;

/**
 * CarParts schema
 */
const carPartsSchema = new Schema(
  {
    createdBy: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    city: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    subCategory: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
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
  },
  {
    //   Enable createdAt, updatedAt
    timestamps: true,
  }
);

const CarParts = mongoose.model("CarParts", carPartsSchema);

module.exports = CarParts;
