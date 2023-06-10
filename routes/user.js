const express = require("express");
const {
  loginUser,
  signupUser,
  getUser,
  updateUser,
  deleteUser,
  getUsers,
} = require("../controllers/user");
const authMiddleware = require("../Middlewares/auth.middleware");
const isAdmin = require("../middlewares/admin.middleware");

// router
const router = express.Router();

// login router
router.post("/login", loginUser);

// signup router
router.post("/signup", signupUser);
// get all user
router.get("/all", authMiddleware, isAdmin, getUsers);
// get an user
router.get("/:userId", authMiddleware, getUser);
// update an user
router.patch("/:userId", authMiddleware, updateUser);
// delete an user
router.delete("/:userId", authMiddleware, deleteUser);

module.exports = router;
