import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-gray-800 p-4 text-white flex justify-between items-center">
    <div className="font-bold text-xl">
      <Link to="/">Ecommerce</Link>
    </div>
    <div className="space-x-4">
      <Link to="/" className="hover:text-gray-300">
        Home
      </Link>
      <Link to="/add-product" className="hover:text-gray-300">
        Add Product
      </Link>
      <Link to="/cart" className="hover:text-gray-300">
        Cart
      </Link>
    </div>
  </nav>
);

export default Navbar;
