const mongoose = require("mongoose");
const { Schema } = mongoose;

/**
 * User cars schema
 */
const blogSchema = new Schema(
  {
    createdBy: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "USER",
    },
    title: {
      required: true,
      trim: true,
      type: String,
    },
    flareTag: {
      required: true,
      trim: true,
      type: String,
    },
    info: {
      required: true,
      trim: true,
      type: String,
    },
    content: {
      required: true,
      trim: true,
      type: String,
    },
    images: [String],
    name: {
      required: true,
      trim: true,
      type: String,
    },
    phone: {
      required: true,
      trim: true,
      type: Number,
    },
    email: {
      required: true,
      trim: true,
      type: String,
    },
  },
  {
    //   Enable createdAt, updatedAt
    timestamps: true,
  }
);

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
