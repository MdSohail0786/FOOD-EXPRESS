import React from "react";

const foodItems = [
  {
    id: 1,
    name: "Chicken-skewers",
    description: "Classic delight with 100% real mozzarella cheese",
    price: 12.99,
    image: "chicken-skewers.jpg",
  },
  {
    id: 2,
    name: "Meat-burger",
    description: "Fresh assorted sushi with wasabi and soy sauce",
    price: 24.99,
    image: "meat-burger.jpg",
  },
  {
    id: 3,
    name: "Penne-pasta-tomato",
    description: "Crisp romaine lettuce with Caesar dressing and croutons",
    price: 9.99,
    image: "penne-pasta-tomato.jpg",
  },
  {
    id: 4,
    name: "Pizza",
    description: "Juicy beef patty with cheese, lettuce, and tomato",
    price: 14.99,
    image: "pizza-pizza.jpg",
  },
  {
    id: 5,
    name: "Samosa",
    description: "Creamy pasta with pancetta and parmesan cheese",
    price: 16.99,
    image: "samosa.jpg",
  },
  {
    id: 6,
    name: "Vegetables",
    description: "Classic delight with 100% real mozzarella cheese",
    price: 12.99,
    image: "vegetable.jpg",
  },
  {
    id: 7,
    name: "Indian Thali",
    description: "Fresh assorted sushi with wasabi and soy sauce",
    price: 24.99,
    image: "image.png",
  },
  {
    id: 8,
    name: "Caesar Salad",
    description: "Crisp romaine lettuce with Caesar dressing and croutons",
    price: 9.99,
    image: "download.jpg",
  },
  {
    id: 9,
    name: "noddles",
    description: "Juicy beef patty with cheese, lettuce, and tomato",
    price: 14.99,
    image: "street-food.jpg",
  },
  {
    id: 10,
    name: "Pasta Carbonara",
    description: "Creamy pasta with pancetta and parmesan cheese",
    price: 16.99,
    image: "down1.jpg",
  },
  {
    id: 11,
    name: "Margherita Pizza",
    description: "Classic delight with 100% real mozzarella cheese",
    price: 12.99,
    image: "download1.jpg",
  },
  {
    id: 12,
    name: "Sushi Platter",
    description: "Fresh assorted sushi with wasabi and soy sauce",
    price: 24.99,
    image: "download 3.jpg",
  },
  {
    id: 13,
    name: "Paneer Curry",
    description: "Crisp romaine lettuce with Caesar dressing and croutons",
    price: 9.99,
    image: "download 7.jpg",
  },
  {
    id: 14,
    name: "Veg Biryani",
    description: "Juicy beef patty with cheese, lettuce, and tomato",
    price: 14.99,
    image: "download 4.jpg",
  },
  {
    id: 15,
    name: "Paneer Tikki",
    description: "Creamy pasta with pancetta and parmesan cheese",
    price: 16.99,
    image: "download 5.jpg",
  },
];

export default function Menu({ addToCart, searchTerm }) {
  const filteredItems = foodItems.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 md:p-12 bg-black bg-opacity-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center text-pink-600">
          Our Menu
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-foodCardBg bg-opacity-30 rounded-lg shadow-foodCard overflow-hidden flex flex-col"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-48 w-full object-cover"
                loading="lazy"
              />
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-gray-600 flex-grow">{item.description}</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="font-bold text-lg text-pink-600">
                    ${item.price.toFixed(2)}
                  </span>
                  <button
                    onClick={() => addToCart(item)}
                    className="bg-button text-white px-4 py-2 rounded hover:opacity-90 transition"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {filteredItems.length === 0 && searchTerm && (
          <p className="text-center text-gray-600 mt-8">
            No items found matching "{searchTerm}"
          </p>
        )}
      </div>
    </div>
  );
}
