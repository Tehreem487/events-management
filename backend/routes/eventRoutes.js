import express from "express";
import {
  createEvent,
  getEvents,
  getEventById,
  deleteEvent,
} from "../controllers/eventController.js";

import { protect, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getEvents);
router.get("/:id", getEventById);

router.post("/", protect, adminOnly, createEvent);
// router.post("/", createEvent);
router.delete("/:id", protect, adminOnly, deleteEvent);

export default router;