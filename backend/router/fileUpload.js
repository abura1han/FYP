const router = require("express").Router();
const upload = require("../utils/fileUpload");
const Authenticate = require("../middleware/authenticate");

router.post(
  "/file-upload",
  Authenticate,
  upload.array("file-upload", 10),
  async (req, res) => {
    try {
      res.status(200).json({
        success: true,
        statusCode: 200,
        message: "File uploaded successfully",
        data: req.files.map((f) => f.filename),
      });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ success: false, statusCode: 500, error: error.message });
    }
  }
);

module.exports = router;
