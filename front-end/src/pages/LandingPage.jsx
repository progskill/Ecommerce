import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const LandingPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      setProducts(
        querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    };
    fetchProducts();
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">All Products</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Sign Up
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link
            to={`/product/${product.id}`}
            key={product.id}
            className="border rounded-lg p-4 hover:shadow-lg"
          >
            {product.imageUrl && (
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-40 object-cover mb-2 rounded"
              />
            )}
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="mb-2">{product.description}</p>
            <p className="font-bold">${product.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
