const express = require("express");
const {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} = require("../controllers/user.js");
const {
  verifyToken,
  verifyUser,
  verifyAdmin,
} = require("../utils/verifyToken.js");

const router = express.Router();

// router.get("/checkAuthentication", verifyToken, (req, res, next) => {
//   res.send({ message: "Hello user, you are logged in", info: req.user });
// });

// router.get("/checkUser/:id", verifyUser, (req, res, next) => {
//   res.send({
//     message: "Hello user, you are logged in and you can delete your account",
//     info: req.user,
//   });
// });

// router.get("/checkAdmin/:id", verifyAdmin, (req, res, next) => {
//   res.send({
//     message: "Hello Admin, you are logged in and you can delete All account",
//     info: req.user,
//   });
// });

//update PUT
router.put("/:id", verifyUser, updateUser);

//delete
router.delete("/:id", verifyUser, deleteUser);

//get
router.get("/:id", verifyUser, getUser);

//get all
router.get("/", verifyAdmin, getUsers);

module.exports = router;
