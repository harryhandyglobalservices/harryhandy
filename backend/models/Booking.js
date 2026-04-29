import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    bookingId: String,
    name: String,
    phone: String,
    email: String,
    address: String,
    service: String,
    date: String,
    note: String,
    amount: Number,
    status: {
      type: String,
      default: "pending",
    },

    status: {
      type: String,
      default: "pending",
    },

    paid: {
      type: Boolean,
      default: false,
    },

    paymentRef: String,
    paid: { type: Boolean, default: false },
    paymentRef: String,
  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);