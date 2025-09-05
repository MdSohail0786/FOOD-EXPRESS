import React from "react";

export default function About() {
  return (
    <div className="p-6 md:p-12 food-bg">
      <h2 className="text-4xl font-bold mb-10 text-center text-pink-600">
        About FoodExpress
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-lg leading-relaxed mb-6 font-medium text-white italic">
            FoodExpress is your go-to platform for quick and delicious food
            delivery. We partner with the best local restaurants to bring you a
            wide variety of cuisines right to your doorstep.
          </p>
          <p className="text-lg leading-relaxed mb-6 font-medium text-white italic">
            Our mission is to provide fast, reliable, and tasty food delivery
            with a seamless online experience. Whether you're craving pizza,
            sushi, or a healthy salad, FoodExpress has you covered.
          </p>
          <p className="text-lg leading-relaxed font-medium text-white italic">
            Join thousands of satisfied customers and experience the convenience
            of FoodExpress today!
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src="bcakgound-remove-man.png"
            alt="Food Delivery"
            className="rounded-lg shadow-lg w-full max-w-md"
          />
        </div>
      </div>
    </div>
  );
}
