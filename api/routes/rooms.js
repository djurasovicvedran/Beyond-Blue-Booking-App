import express from "express";
import {
  createRoom,
  deleteRoom,
  getRoom,
  getRooms,
  updateRoom,
  updateRoomAvailability,
} from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// create
router.post("/:hotelId", verifyAdmin, createRoom);
// update
router.put("/:id", verifyAdmin, updateRoomAvailability);
router.put("availability/:id", updateRoom);
// delete
router.delete("/:id/:hotelId", verifyAdmin, deleteRoom);
// get
router.put("/:id", getRoom);
// get all
router.put("/:id", getRooms);

export default router;
