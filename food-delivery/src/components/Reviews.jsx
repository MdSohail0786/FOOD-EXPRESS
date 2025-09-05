import React, { useState, useEffect } from "react";

const reviews = [
  {
    id: 1,
    name: "Alice",
    text: "The pizza was amazing and arrived hot! Highly recommend FoodExpress.",
    image: "man.jpg",
  },
  {
    id: 2,
    name: "Bob",
    text: "Great variety of food and super fast delivery.",
    image: "man3.jpg",
  },
  {
    id: 3,
    name: "Catherine",
    text: "Customer service was very helpful and the food tasted fresh.",
    image: "women.jpg",
  },
  {
    id: 4,
    name: "David",
    text: "Love the sushi platter! Will order again.",
    image: "man2.jpg",
  },
];

export default function Reviews() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-footer rounded-lg shadow-foodCard p-6 max-w-3xl mx-auto">
      <h3 className="text-2xl font-bold mb-4 text-pink-600 text-center">
        Customer Reviews
      </h3>
      <div className="relative h-48 overflow-hidden">
        {reviews.map((review, index) => (
          <div
            key={review.id}
            className={`absolute top-0 left-0 w-full transition-transform duration-700 ease-in-out ${
              index === current ? "translate-x-0" : "translate-x-full"
            }`}
            style={{
              transform:
                index === current ? "translateX(0)" : "translateX(100%)",
            }}
          >
            <div className="flex flex-col items-center">
              <img
                src={review.image}
                alt={review.name}
                className="w-16 h-16 rounded-full mb-2"
              />
              <p className="text-white italic text-center">"{review.text}"</p>
              <p className="mt-2 text-center font-semibold text-pink-600">
                - {review.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
