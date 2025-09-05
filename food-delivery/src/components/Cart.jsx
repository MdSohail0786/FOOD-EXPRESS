import React from "react";

export default function Cart({ cartItems, removeFromCart }) {
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="max-w-4xl mx-auto p-6 md:p-12 bg-black bg-opacity-50">
      <h2 className="text-4xl font-bold mb-8 text-center text-pink-600">
        Your Cart
      </h2>
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cartItems.map((item, idx) => (
              <li key={idx} className="flex justify-between border-b pb-2">
                <span>{item.name}</span>
                <span className="font-semibold">${item.price.toFixed(2)}</span>
                <button
                  onClick={() => removeFromCart(idx)}
                  className="ml-4 text-red-600 hover:text-red-800"
                  aria-label={`Remove ${item.name} from cart`}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-6 text-right text-xl font-bold text-pink-600">
            Total: ${total.toFixed(2)}
          </div>
          <button
            onClick={() => alert("Checkout functionality coming soon!")}
            className="mt-6 w-full bg-button text-white py-3 rounded hover:opacity-90 transition"
          >
            Checkout
          </button>
        </>
      )}
    </div>
  );
}
