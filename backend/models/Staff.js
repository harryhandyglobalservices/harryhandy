import mongoose from "mongoose";

const staffSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    role: { type: String, required: true },
    image: String,
  },
  { timestamps: true }
);

export default mongoose.model("Staff", staffSchema);