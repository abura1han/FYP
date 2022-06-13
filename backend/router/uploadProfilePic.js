const router = require("express").Router();
const multer = require("multer");
const Authenticate = require("../middleware/authenticate");
const path = require("path");
const User = require("../model/userSchema");
const fs = require("fs");

// Profile picture upload directory
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix =
      Date.now() +
      "-" +
      Math.round(Math.random() * 1e9) +
      path.extname(file.originalname);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const upload = multer({ storage: storage });

/**
 * Upload profie pic
 */
router.post(
  "/upload-profile-pic",
  Authenticate,
  upload.single("profilePic"),
  async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({
          success: false,
          statusCode: 400,
          error: "File can not be empty",
        });
      }

      // Remove previous image
      if (req.User.profilePic) {
        fs.unlinkSync(
          path.resolve(__dirname, "../", "uploads", req.User.profilePic)
        );
      }

      const profilePic = await User.findOneAndUpdate(
        {
          _id: req.userID,
        },
        { $set: { profilePic: req.file.filename } },
        { new: true }
      );

      res.status(200).json({
        success: true,
        statusCode: 200,
        message: "Profile pic uploaded successfully",
        data: profilePic,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, statusCode: 500, error });
    }
  }
);

module.exports = router;
