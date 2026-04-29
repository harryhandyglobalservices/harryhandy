import express from "express";
import {
    createBooking,
    getBookings,
    getBookingStats,
    getMonthlyBookings,
    initializePayment,
    updateBookingStatus,
    verifyPayment,
} from "../controllers/bookingController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/booking", createBooking);
router.post("/pay", initializePayment);
router.get("/verify/:reference", verifyPayment);
router.get("/bookings", protect, getBookings);
router.put("/bookings/:id", protect, updateBookingStatus);
router.get("/stats/monthly", getMonthlyBookings);
router.get("/booking-stats", getBookingStats);

export default router;