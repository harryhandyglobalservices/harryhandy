import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },

    content: { type: String, required: true },

    image: {
      type: String,
      default: "",
    },

    author: {
      type: String,
      default: "Admin",
    },

    // 🔥 better than manual date
    createdAt: {
      type: Date,
      default: Date.now,
    },

    slug: {
      type: String,
      unique: true,
    },

    // 🔥 optional but VERY useful
    excerpt: {
      type: String,
    },

    category: {
      type: String,
      default: "General",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Blog", blogSchema);