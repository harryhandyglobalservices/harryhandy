import Staff from "../models/Staff.js";

// CREATE STAFF
export const createStaff = async (req, res) => {
    try {
        console.log("BODY:", req.body);
        console.log("FILE:", req.file);

        const image = req.file?.path || "";

        if (!req.body.name || !req.body.role) {
            return res.status(400).json({ message: "Name and role are required" });
        }

        const staff = await Staff.create({
            name: req.body.name,
            role: req.body.role,
            image,
        });

        res.status(201).json(staff);
    } catch (err) {
        console.log("ERROR:", err); // 🔥 VERY IMPORTANT
        res.status(500).json({ message: err.message });
    }
};



// GET ALL STAFF
export const getStaff = async (req, res) => {
    try {
        const staff = await Staff.find().sort({ createdAt: -1 });
        res.json(staff);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};