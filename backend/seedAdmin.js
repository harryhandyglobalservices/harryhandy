import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import Admin from "./models/Admin.js";
import connectDB from "./config/db.js";

dotenv.config();

console.log("Seeder started...");

const start = async () => {
  try {
    console.log("Connecting DB...");
    await connectDB();

    console.log("Creating admin...");

    const hashedPassword = await bcrypt.hash("admin123", 10);

    await Admin.create({
      username: "admin",
      password: hashedPassword,
    });

    console.log("Admin created successfully");
    process.exit();
  } catch (err) {
    console.error("ERROR:", err);
    process.exit(1);
  }
};

start();