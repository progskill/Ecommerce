import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

const ProductDetails = ({ addToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      const docRef = doc(db, "products", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setProduct({ id: docSnap.id, ...docSnap.data() });
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow">
      {product.imageUrl && (
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-60 object-cover mb-4 rounded"
        />
      )}
      <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
      <p className="mb-2">{product.description}</p>
      <p className="font-bold mb-4">${product.price}</p>
      <div className="flex items-center mb-4">
        <label className="mr-2">Quantity:</label>
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="border p-2 w-20 rounded"
        />
      </div>
      <button
        className="bg-green-600 text-white px-4 py-2 rounded"
        onClick={() => addToCart(product, quantity)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetails;
