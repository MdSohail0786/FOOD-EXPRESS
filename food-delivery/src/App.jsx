import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  FaShoppingCart,
  FaUser,
  FaBars,
  FaTimes,
  FaSearch,
} from "react-icons/fa";
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Login from "./components/Login";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const addToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
  };

  const removeFromCart = (index) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  const toggleLogin = () => {
    setIsLoginOpen(!isLoginOpen);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-footer">
        <nav className="bg-footer p-4 flex justify-between items-center sticky top-0 z-50 shadow-lg">
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleSidebar}
              className="text-white md:hidden focus:outline-none"
              aria-label="Toggle menu"
            >
              {sidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
            <Link
              to="/"
              className="text-white font-bold text-2xl tracking-widest hover:scale-110 transition-transform"
            >
              FoodExpress
            </Link>
          </div>

          <div className="md:hidden flex-1 mx-4 relative">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none" />
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full pl-10 pr-4 py-2 rounded bg-white bg-opacity-20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:bg-opacity-30 transition"
              aria-label="Search menu"
            />
          </div>

          <ul className="hidden md:flex space-x-8 text-white font-semibold">
            <li>
              <Link to="/" className="hover:text-button">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-button">
                About
              </Link>
            </li>
            <li>
              <Link to="/menu" className="hover:text-button">
                Menu
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-button">
                Contact
              </Link>
            </li>
          </ul>

          <input
            type="text"
            placeholder="Search menu..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="hidden md:block px-3 py-1 rounded bg-white bg-opacity-30 text-black placeholder-white focus:outline-none focus:ring-2 focus:ring-pink-600"
            aria-label="Search menu"
          />

          <div className="flex items-center space-x-6">
            <button
              onClick={toggleLogin}
              className="text-white hover:text-button flex items-center space-x-1"
              aria-label="Login"
            >
              <FaUser />
              <span className="hidden sm:inline">Login</span>
            </button>
            <Link
              to="/cart"
              className="relative text-white hover:text-button"
              aria-label="Cart"
            >
              <FaShoppingCart size={22} />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 rounded-full text-xs w-5 h-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </Link>
          </div>
        </nav>

        {/* Sidebar for mobile */}
        {sidebarOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40">
            <div className="fixed top-0 left-0 w-64 h-full bg-footer p-6 z-50 shadow-lg">
              <ul className="flex flex-col space-y-6 text-white font-semibold text-lg">
                <li>
                  <Link
                    to="/"
                    onClick={() => setSidebarOpen(false)}
                    className="hover:text-button"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    onClick={() => setSidebarOpen(false)}
                    className="hover:text-button"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/menu"
                    onClick={() => setSidebarOpen(false)}
                    className="hover:text-button"
                  >
                    Menu
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    onClick={() => setSidebarOpen(false)}
                    className="hover:text-button"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}

        {isLoginOpen && <Login onClose={toggleLogin} />}

        <main className="flex-grow bg-footer">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/menu"
              element={<Menu addToCart={addToCart} searchTerm={searchTerm} />}
            />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/cart"
              element={
                <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
              }
            />
            <Route
              path="*"
              element={
                <div className="p-10 text-center text-2xl">Page Not Found</div>
              }
            />
          </Routes>
        </main>

        <footer className="bg-footer text-white p-4 md:p-8 border-t border-gray-700 shadow-inner">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">FoodExpress</h3>
              <p className="text-sm">
                Delicious food delivered fast to your doorstep.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/" className="hover:text-button">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/menu" className="hover:text-button">
                    Menu
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-button">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-button">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <p className="text-sm">Email:mdsohail01117@gmail.com</p>
              <p className="text-sm">Phone: (+91) 9546012336</p>
              <p className="text-sm">Address: 123 Food St, City, State</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-button">
                  Facebook
                </a>
                <a href="#" className="hover:text-button">
                  Twitter
                </a>
                <a href="#" className="hover:text-button">
                  Instagram
                </a>
              </div>
            </div>
          </div>
          <div className="text-center mt-8 pt-4 border-t border-gray-600">
            &copy; {new Date().getFullYear()} FoodExpress. All rights reserved.
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
