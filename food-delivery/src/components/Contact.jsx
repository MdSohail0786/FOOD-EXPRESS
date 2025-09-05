import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: "error", message: "Please fill all fields." });
      return;
    }
    // Simulate sending message
    setStatus({ type: "success", message: "Message sent successfully!" });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="p-6 md:p-12 food-bg">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center text-pink-600">
          Contact Us
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block font-semibold mb-2">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="w-full border border-gray-300 rounded px-4 py-2 bg-white bg-opacity-30 text-black placeholder-white focus:outline-none focus:ring-2 focus:ring-pink-600"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block font-semibold mb-2">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full border border-gray-300 rounded px-4 py-2 bg-white bg-opacity-30 text-black placeholder-white focus:outline-none focus:ring-2 focus:ring-pink-600"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block font-semibold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className="w-full border border-gray-300 rounded px-4 py-2 bg-white bg-opacity-30 text-black placeholder-white focus:outline-none focus:ring-2 focus:ring-pink-600"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-button text-white px-6 py-3 rounded hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>
        {status && (
          <p
            className={`mt-4 text-center font-semibold ${
              status.type === "success" ? "text-green-600" : "text-red-600"
            }`}
          >
            {status.message}
          </p>
        )}
      </div>
    </div>
  );
}
