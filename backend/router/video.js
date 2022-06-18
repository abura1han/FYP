const router = require("express").Router();
const Authenticate = require("../middleware/authenticate");
const Video = require("../model/Video");

// Get vidoes
router.get("/videos", async (req, res) => {
  try {
    const videos = await Video.find({});
    res.status(200).json({ success: true, statusCode: 200, data: videos });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, statusCode: 500, error: error.message });
  }
});

// Get video by id
router.get("/videos/:id", async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    res.status(200).json({ success: true, statusCode: 200, data: video });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, statusCode: 500, error: error.message });
  }
});

// Create vidoe
router.post("/video", Authenticate, async (req, res) => {
  const { videoUrl, title, email, phone, name, thumbnail } = req.body;
  try {
    const createdBy = req.User._id;
    const createVidoe = await Video.create({
      createdBy,
      videoUrl,
      title,
      email,
      phone,
      name,
      thumbnail,
    });

    res.status(200).json({ success: true, statusCode: 200, data: createVidoe });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, statusCode: 500, error: error.message });
  }
});

// Update vidoe
router.put("/videos/:id", Authenticate, async (req, res) => {
  const { vidoeUrl, title, email, phone, name } = req.body;
  try {
    const createdBy = req.User._id;
    const createVidoe = await Video.updateOne(
      { createdBy, _id: req.params.id },
      { $set: { vidoeUrl, title, email, phone, name } }
    );

    res.status(200).json({ success: true, statusCode: 200, data: createVidoe });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, statusCode: 500, error: error.message });
  }
});

// Delete vidoe
router.delete("/videos/:id", Authenticate, async (req, res) => {
  try {
    const createdBy = req.User._id;
    const createVidoe = await Video.deleteOne({
      createdBy,
      _id: req.params.id,
    });

    res.status(200).json({ success: true, statusCode: 200, data: createVidoe });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, statusCode: 500, error: error.message });
  }
});

module.exports = router;
