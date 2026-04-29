import express from "express";
import { createStaff, getStaff } from "../controllers/staffController.js";
import upload from "../middleware/upload.js";

const router = express.Router();

router.post("/", upload.single("image"), createStaff);
router.get("/", getStaff);

export default router;