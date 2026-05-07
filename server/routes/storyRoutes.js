import express from "express";

import {
  getBookmarkedStories,
  getStories,
  getStoryById,
  toggleBookmark,
} from "../controller/storyController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getStories);

router.get(
  "/bookmarks/me",
  protect,
  getBookmarkedStories
);

router.get("/:id", getStoryById);

router.post("/:id/bookmark", protect, toggleBookmark);




export default router;