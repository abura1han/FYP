const mongoose = require("mongoose");
const { Schema } = mongoose;

/**
 * User cars schema
 */
const videoSchema = new Schema(
  {
    createdBy: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    videoUrl: {
      type: String,
      required: true,
    },
    name: String,
    title: String,
    email: String,
    phone: String,
    thumbnail: [String],
  },
  {
    //   Enable createdAt, updatedAt
    timestamps: true,
  }
);

const Video = mongoose.model("Video", videoSchema);

module.exports = Video;
