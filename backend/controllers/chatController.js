import Chat from "../models/Chat.js";
import OpenAI from "openai";


export const sendMessage = async (req, res) => {
  const userMessage = req.body.message?.toLowerCase() || "";

  let reply = "Hi 👋 How can we help you today?";

  if (
    userMessage.includes("price") ||
    userMessage.includes("cost") ||
    userMessage.includes("how much")
  ) {
    reply = "Our cleaning services start from ₦5,000 depending on the service.";
  }

  else if (
    userMessage.includes("book") ||
    userMessage.includes("appointment")
  ) {
    reply = "You can book directly on our website or via WhatsApp.";
  }

  else if (
    userMessage.includes("service") ||
    userMessage.includes("cleaning")
  ) {
    reply = "We offer housekeeping, fumigation, deep cleaning, post-construction cleaning, and carpet cleaning.";
  }

  else if (
    userMessage.includes("location") ||
    userMessage.includes("where")
  ) {
    reply = "We operate across Lagos and nearby areas.";
  }

  else if (
    userMessage.includes("contact") ||
    userMessage.includes("whatsapp")
  ) {
    reply = "Chat with us on WhatsApp: https://wa.me/2347066443195";
  }

  res.json({
    content: reply,
  });
};