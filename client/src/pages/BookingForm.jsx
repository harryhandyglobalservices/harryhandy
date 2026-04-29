import React, { useState } from "react";

export default function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    service: "Housekeeping",
    date: "",
    note: "",
    method: "whatsapp",
  });

  const services = [
    "Housekeeping",
    "Fumigation",
    "Deep Cleaning",
    "Post Construction Cleaning",
    "Carpet Cleaning",
  ];

   const API_URL = import.meta.env.VITE_API_URL;

  /* SIMPLE BOOKING ID */
  const generateBookingId = () => {
    return "BH-" + Math.floor(100000 + Math.random() * 900000);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  /* WHATSAPP */
  const handleWhatsApp = (bookingId) => {
    const message = `
 Booking ID: ${bookingId}

Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}
Address: ${form.address}
Service: ${form.service}
Date: ${form.date}
Note: ${form.note}
    `;

    const url = `https://wa.me/2348077381136?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 1. Create booking
      const res = await fetch(`${API_URL}/booking`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      const bookingId = data.bookingId;

      // 2. WhatsApp flow
      if (form.method === "whatsapp") {
        handleWhatsApp(bookingId);
        return;
      }

      // 3. Paystack flow (backend)
      const payRes = await fetch(`${API_URL}/pay`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: form.email || `${form.phone}@gmail.com`,
          amount: 5000,
          bookingId,
        }),
      });

      const payData = await payRes.json();

      // 4. Redirect to Paystack
      window.location.href = payData.authorization_url;

    } catch (err) {
      console.log(err);
      alert("Something went wrong");
    }
  };


  

  return (
    <section className="w-full flex justify-center py-16 bg-blue-950 px-4">

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl bg-white shadow-xl rounded-2xl p-6 sm:p-10 space-y-5"
      >

        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800">
          Book a Cleaning Service
        </h2>

        {/* ROW 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

          <input
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-400"
          />

          <input
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
            className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-400"
          />

        </div>

        {/* EMAIL */}
        <input
          name="email"
          placeholder="Email (optional)"
          value={form.email}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-400"
        />

        {/* ADDRESS */}
        <input
          name="address"
          placeholder="Home / Office Address"
          value={form.address}
          onChange={handleChange}
          required
          className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-400"
        />

        {/* GOOGLE MAP LINK OPTION */}
        <input
          name="map"
          placeholder="Google Maps Link (optional)"
          className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-400"
        />

        {/* SERVICE + DATE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            className="border p-3 rounded-lg"
          >
            {services.map((s, i) => (
              <option key={i} value={s}>
                {s}
              </option>
            ))}
          </select>

          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
            className="border p-3 rounded-lg"
          />

        </div>

        {/* NOTE */}
        <textarea
          name="note"
          placeholder="Additional details (optional)"
          value={form.note}
          onChange={handleChange}
          rows="4"
          className="w-full border p-3 rounded-lg"
        />

        {/* METHOD */}
        <div className="flex flex-col sm:flex-row gap-4 text-sm">

          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="method"
              value="whatsapp"
              checked={form.method === "whatsapp"}
              onChange={handleChange}
            />
            WhatsApp Booking
          </label>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="method"
              value="paystack"
              onChange={handleChange}
            />
            Pay Deposit (₦5,000)
          </label>

        </div>

        {/* BUTTON */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
        >
          {form.method === "whatsapp"
            ? "Book via WhatsApp"
            : "Pay & Confirm Booking"}
        </button>

      </form>
    </section>
  );
}