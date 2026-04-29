import { useState } from "react";
import { FaWhatsapp, FaTimes } from "react-icons/fa";
import { LuMessageCircleQuestion } from "react-icons/lu";

export default function ChatWidget() {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([
        { text: "Hi 👋 How can we help you?", sender: "bot" }
    ]);
    const [input, setInput] = useState("");

    const API_URL = import.meta.env.VITE_API_URL;

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage = { text: input, sender: "user" };
        setMessages((prev) => [...prev, userMessage]);
        setInput("");

        // Typing...
        setMessages((prev) => [
            ...prev,
            { text: "Typing...", sender: "bot" }
        ]);

        try {
            const res = await fetch(`${API_URL}/chat`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ message: input }),
            });

            const data = await res.json();

            // remove typing
            setMessages((prev) => prev.slice(0, -1));


            setMessages((prev) => [
                ...prev,
                { text: data.content, sender: "bot" }
            ]);

        } catch (error) {
            setMessages((prev) => [
                ...prev,
                { text: "Error connecting to server.", sender: "bot" }
            ]);
        }
    };


    const getBotReply = (msg) => {
        msg = msg.toLowerCase();

        if (msg.includes("price")) return "Our prices depend on the service. Please tell us what you need 😊";
        if (msg.includes("cleaning")) return "We offer deep cleaning, home cleaning, and office cleaning.";
        if (msg.includes("location")) return "We operate across Lagos and nearby areas.";

        return "Thanks for your message! You can also chat with us on WhatsApp for faster response.";
    };

    return (
        <div className="fixed bottom-5 right-5 z-[1000]">
            {/* Chat Box */}
            {open && (
                <div className="w-80 h-96 bg-white rounded-xl shadow-xl flex flex-col overflow-hidden mb-3">

                    {/* Header */}
                    <div className="bg-[#034766] text-white p-3 flex justify-between items-center">
                        <span>Support</span>
                        <button onClick={() => setOpen(false)}>
                            <FaTimes />
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 p-3 overflow-y-auto space-y-2">
                        {messages.map((msg, i) => (
                            <div
                                key={i}
                                className={`p-2 rounded-lg text-sm max-w-[70%] ${msg.sender === "user"
                                    ? "bg-green-100 ml-auto"
                                    : "bg-gray-100"
                                    }`}
                            >
                                {msg.text}
                            </div>
                        ))}
                    </div>

                    {/* Input */}
                    <div className="p-2 border-t flex gap-2">
                        <input
                            type="text"
                            className="flex-1 border rounded-lg px-2 py-1 text-sm"
                            placeholder="Type a message..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <button
                            onClick={handleSend}
                            className="bg-[#c9ad0d] text-white px-3 font-bold rounded-lg"
                        >
                            Send
                        </button>
                    </div>

                </div>
            )}

            {/* Floating Button */}
            <button
                onClick={() => setOpen(!open)}
                className="bg-[#fadd38] text-white p-3 rounded-full shadow-lg"
            >
                {open ? <FaTimes /> : <LuMessageCircleQuestion className="font-bold text-black text-3xl" />}
            </button>
        </div>
    );
}