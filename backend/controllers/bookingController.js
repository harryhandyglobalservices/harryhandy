import Booking from "../models/Booking.js";
import axios from "axios";

/* 🔥 Generate Booking ID */
const generateBookingId = () => {
    return "BH-" + Math.floor(100000 + Math.random() * 900000);
};

/* CREATE BOOKING */
export const createBooking = async (req, res) => {
    try {
        const data = req.body;
        const bookingId = generateBookingId();

        const booking = new Booking({
            ...data,
            bookingId,
            amount: 5000,
        });

        await booking.save();

        res.json({
            bookingId,
            booking,
        });
    } catch (err) {
        res.status(500).json({ error: "Error creating booking" });
    }
};

/* 🔥 INIT PAYSTACK */
export const initializePayment = async (req, res) => {
    try {
        const { email, amount, bookingId } = req.body;

        const response = await axios.post(
            "https://api.paystack.co/transaction/initialize",
            {
                email,
                amount: amount * 100,
                reference: bookingId,
                callback_url: "http://localhost:5173/payment-success",
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
                },
            }
        );

        res.json(response.data.data);
    } catch (error) {
        res.status(500).json({ error: "Payment init failed" });
    }
};

/*  VERIFY PAYMENT */

export const verifyPayment = async (req, res) => {
    try {
        const { reference } = req.params;

        const response = await axios.get(
            `https://api.paystack.co/transaction/verify/${reference}`,
            {
                headers: {
                    Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
                },
            }
        );

        if (response.data.data.status === "success") {
            await Booking.findOneAndUpdate(
                { bookingId: reference },
                {
                    paid: true,
                    status: "confirmed",
                    paymentRef: reference,
                }
            );
        }

        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Verification failed" });
    }
};



export const getBookings = async (req, res) => {
    try {
        const bookings = await Booking.find().sort({ createdAt: -1 });

        res.json(bookings);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch bookings" });
    }
};



export const updateBookingStatus = async (req, res) => {
    try {
        const { status } = req.body;

        const booking = await Booking.findByIdAndUpdate(
            req.params.id,
            { status },
            {
                returnDocument: "after",
                runValidators: true,
            }
        );

        res.json(booking);
    } catch (error) {
        res.status(500).json({ error: "Update failed" });
    }
};




export const getMonthlyBookings = async (req, res) => {
    try {
        const stats = await Booking.aggregate([
            {
                $group: {
                    _id: { $month: "$createdAt" },
                    totalBookings: { $sum: 1 },
                    totalRevenue: { $sum: "$amount" }
                }
            },
            { $sort: { "_id": 1 } }
        ]);

        const months = [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];

        const formatted = months.map((m, i) => {
            const found = stats.find(s => s._id === i + 1);
            return {
                name: m,
                bookings: found ? found.totalBookings : 0,
                revenue: found ? found.totalRevenue : 0
            };
        });

        res.json(formatted);

    } catch (error) {
        res.status(500).json({ error: "Failed to get stats" });
    }
};


export const getBookingStats = async (req, res) => {
    try {
        const bookings = await Booking.find();

        const completed = bookings.filter(b => b.status === "Completed").length;
        const pending = bookings.filter(b => !b.status || b.status === "Pending").length;
        const confirmed = bookings.filter(b => b.status === "Confirmed").length;

        res.json({
            completed,
            pending,
            confirmed,
        });

    } catch (err) {
        res.status(500).json({ error: "Failed to get stats" });
    }
};



