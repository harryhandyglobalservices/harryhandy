import express from "express";
import {
  createBlog,
  getBlogs,
  deleteBlog,
  getCategories,
  getBlogBySlug,
} from "../controllers/blogController.js";

import { protect } from "../middleware/authMiddleware.js";
import upload from "../middleware/upload.js";


const router = express.Router();

/* PUBLIC */
router.get("/blogs", getBlogs);
router.get("/blogs/:slug", getBlogBySlug);
router.get("/categories", getCategories);



/* ADMIN ONLY */
router.post("/blogs", protect,upload.single("image"), createBlog);
router.delete("/blogs/:id", protect, deleteBlog);

export default router;