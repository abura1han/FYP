const router = require("express").Router();
const User = require("../model/userSchema");

/**
 * Get all users
 */
router.get("/users", async (req, res) => {
  try {
    const allUsers = await User.find({});
    const adminUsers = allUsers.filter((user) => user.isAdmin);
    const users = allUsers.filter((user) => !user.isAdmin);

    res
      .status(200)
      .json({ success: true, statusCode: 200, data: { adminUsers, users } });
  } catch (error) {
    res.status(500).json({ success: false, statusCode: 500, error: error });
  }
});

/**
 * Update user
 */
router.put("/update-profile", async (req, res) => {
  try {
    const updateProfile = await User.findByIdAndUpdate(req.body.userId, { $set: req.body }, { new: true });

    res.status(200).json({ success: true, statusCode: 200, data: updateProfile })
  } catch (error) {
    res.status(500).json({ success: false, statusCode: 500, error: error });
  }
})

/**
 * Delete an user
 */
router.delete("/delete-user", async (req, res) => {
  const { userId } = req.query;
  try {
    if (!userId) {
      return res.status(400).json({
        success: false,
        statusCode: 400,
        error: "User id is required to delete an user",
      });
    }

    const deletedUser = await User.findByIdAndDelete(userId);

    res.status(200).json({ success: true, statusCode: 200, data: deletedUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, statusCode: 500, error });
  }
});

module.exports = router;
