import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import chatRoutes from "./routes/chatRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";
import staffRoutes from "./routes/staffRoutes.js";
import Visitor from "./models/Visitor.js";
import visitorRoutes from "./routes/visitorRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";

dotenv.config();
connectDB();

const app = express();


app.use(express.json());
app.use("/uploads", express.static("uploads"));


app.use(
  cors({
    origin: [
      "http://localhost:5173", // local dev
      "http://localhost:3000",
      "https://harryhandy-i1wp.vercel.app/", // your frontend
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);


// Routes
app.use("/api", chatRoutes);
app.use("/api", bookingRoutes);
app.use("/api", authRoutes);
app.use("/api", blogRoutes);
app.use("/api/staff", staffRoutes);
app.use("/api/visitors", visitorRoutes);
app.use("/api/contacts", contactRoutes);



app.use(async (req, res, next) => {
  try {
    const ip =
      req.headers["x-forwarded-for"] || req.socket.remoteAddress;

    const userAgent = req.headers["user-agent"];

    // Check if this visitor already exists
    const existing = await Visitor.findOne({ ip, userAgent });

    if (!existing) {
      await Visitor.create({ ip, userAgent });
    }

  } catch (err) {
    console.log(err);
  }

  next();
});



app.get("/", (req, res) => {
  res.send("API running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);