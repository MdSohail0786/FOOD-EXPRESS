import React, { useState } from "react";

export default function Login({ onClose }) {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple fake login validation
    if (
      formData.email === "user@example.com" &&
      formData.password === "password"
    ) {
      alert("Login successful!");
      onClose();
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-8 w-80 shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 font-bold text-xl"
          aria-label="Close login form"
        >
          &times;
        </button>
        <h3 className="text-2xl font-bold mb-6 text-pink-600 text-center">
          Login
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="login-email" className="block font-semibold mb-1">
              Email
            </label>
            <input
              id="login-email"
              name="email"
              type="email"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-600"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block font-semibold mb-1">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-600"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          {error && <p className="text-red-600 text-center">{error}</p>}
          <button
            type="submit"
            className="bg-pink-600 text-white w-full py-2 rounded hover:bg-pink-700 transition"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600 text-sm">
          Demo credentials: <strong>user@example.com / password</strong>
        </p>
      </div>
    </div>
  );
}
