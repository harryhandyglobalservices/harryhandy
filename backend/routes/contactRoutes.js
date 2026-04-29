import express from "express";
import { createContact, deleteMessage, getContacts } from "../controllers/contactController.js";

const router = express.Router();

router.post("/", createContact); // public
router.get("/", getContacts);    // admin
router.delete("/:id", deleteMessage);

export default router;