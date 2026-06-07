import express from "express";
import {
  createBooking,
  getUserBookings,
  deleteBooking,
} from "../controllers/bookingController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createBooking);
router.get("/:userId", protect, getUserBookings);
router.delete("/:id", protect, deleteBooking);

export default router;