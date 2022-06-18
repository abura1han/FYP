const router = require("express").Router();
const Authenticate = require("../middleware/authenticate");
const Blog = require("../model/Blog");

// Get vidoes
router.get("/blogs", async (req, res) => {
  try {
    const blogs = await Blog.find({});
    res.status(200).json({ success: true, statusCode: 200, data: blogs });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, statusCode: 500, error: error.message });
  }
});

// Get blog by id
router.get("/blogs/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id).populate("createdBy");
    res.status(200).json({ success: true, statusCode: 200, data: blog });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, statusCode: 500, error: error.message });
  }
});

// Create vidoe
router.post("/blog", Authenticate, async (req, res) => {
  const { title, flareTag, info, content, images, name, phone, email } =
    req.body;
  try {
    const createdBy = req.User._id;
    const createVidoe = await Blog.create({
      createdBy,
      title,
      flareTag,
      info,
      content,
      images,
      name,
      phone,
      email,
    });

    res.status(200).json({ success: true, statusCode: 200, data: createVidoe });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, statusCode: 500, error: error.message });
  }
});

module.exports = router;
