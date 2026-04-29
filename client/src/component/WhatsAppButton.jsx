import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/2348077381136?text=Hello%20I%20need%20help"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-25 right-5 md:right-5 z-[1000] bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
    >
      <FaWhatsapp size={24} />
    </a>
  );
}