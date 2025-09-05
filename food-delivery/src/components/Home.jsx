import React from "react";
import Reviews from "./Reviews";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 food-bg mb-8">
      <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg animate-bounce">
        Welcome to FoodExpress
      </h1>
      <p className="mt-4 text-white max-w-xl text-lg md:text-xl drop-shadow-md">
        Delicious food delivered fast to your doorstep.
      </p>
      <button
        onClick={() => (window.location.href = "/menu")}
        className="mt-8 bg-button text-white font-bold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-transform"
      >
        Order Now
      </button>

      <div className="mt-20 w-full max-w-5xl">
        <Reviews />
      </div>
    </div>
  );
}
