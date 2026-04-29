import Contact from "../models/Contact.js";

// CREATE MESSAGE
export const createContact = async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        const newMessage = await Contact.create({
            name,
            email,
            subject,
            message,
        });

        res.status(201).json(newMessage);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// GET ALL MESSAGES (ADMIN)
export const getContacts = async (req, res) => {
    try {
        const messages = await Contact.find().sort({ createdAt: -1 });
        res.json(messages);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};





// DELETE MESSAGE
export const deleteMessage = async (req, res) => {
  try {
    const message = await Contact.findByIdAndDelete(req.params.id);

    if (!message) {
      return res.status(404).json({ message: "Message not found" });
    }

    res.json({ message: "Message deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};