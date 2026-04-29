import express from "express";
import { loginAdmin } from "../controllers/authController.js";

const router = express.Router();

router.post("/admin/login", loginAdmin);
console.log("AUTH ROUTES LOADED");

export default router;