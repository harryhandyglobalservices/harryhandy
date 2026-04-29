import Visitor from "../models/Visitor.js";

export const getVisitors = async (req, res) => {
  try {
    const count = await Visitor.countDocuments();
    res.json({ count });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};