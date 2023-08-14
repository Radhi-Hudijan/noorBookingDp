const express = require("express");
const {
  createHotel,
  updateHotel,
  deleteHotel,
  getHotel,
  getHotels,
  countByCity,
  countByType,
  getHotelRooms,
} = require("../controllers/hotel.js");
const { verifyAdmin } = require("../utils/verifyToken.js");

const router = express.Router();

//create POST
router.post("/", verifyAdmin, createHotel);

//update PUT
router.put("/:id", verifyAdmin, updateHotel);

//delete
router.delete("/:id", verifyAdmin, deleteHotel);

//get
router.get("/find/:id", getHotel);

//get all
router.get("/", getHotels);

//count by city
router.get("/countByCity", countByCity);

//count by type
router.get("/countByType", countByType);

//get hotel rooms
router.get("/rooms/:id", getHotelRooms);

module.exports = router;
