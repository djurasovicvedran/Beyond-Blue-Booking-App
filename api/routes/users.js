import express from "express";
import {
  updateUser,
  deleteUser,
  getUser,
  getAllUsers,
} from "../controllers/user.js";

import { verifyUser, verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

// update
router.put("/:id", verifyUser, updateUser);
// delete
router.delete("/:id", verifyUser, deleteUser);
// get
router.put("/:id", verifyUser, getUser);
// get all
router.put("/:id", verifyAdmin, getAllUsers);

export default router;
