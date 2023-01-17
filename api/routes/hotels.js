import express from "express";
import {
  createHotel,
  deleteHotel,
  getAllHotels,
  getHotel,
  updateHotel,
} from "../controllers/hotel.js";
import Hotel from "../models/Hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

// create
router.post("/", verifyAdmin, createHotel);
// update
router.put("/:id", verifyAdmin, updateHotel);
// delete
router.delete("/:id", verifyAdmin, deleteHotel);
// get
router.put("/:id", getHotel);
// get all
router.put("/:id", getAllHotels);

export default router;
