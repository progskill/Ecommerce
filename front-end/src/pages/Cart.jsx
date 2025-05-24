import React from "react";

const Cart = ({ cartItems }) => (
  <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded shadow">
    <h2 className="text-2xl font-bold mb-4">Cart</h2>
    {cartItems.length === 0 ? (
      <p>Your cart is empty.</p>
    ) : (
      <ul className="space-y-4">
        {cartItems.map((item, idx) => (
          <li key={item.id} className="border-b pb-2">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ${item.price}</p>
              </div>
              <div className="font-bold">
                ${(item.price * item.quantity).toFixed(2)}
              </div>
            </div>
          </li>
        ))}
      </ul>
    )}
    {cartItems.length > 0 && (
      <div className="mt-6 text-right font-bold text-lg">
        Total: $
        {cartItems
          .reduce((sum, item) => sum + item.price * item.quantity, 0)
          .toFixed(2)}
      </div>
    )}
  </div>
);

export default Cart;
