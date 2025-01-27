
import React from "react";

const CartPage = ({ cartItems, onRemoveFromCart }) => {
  // Helper function to format numbers with commas
  const formatPrice = (price) => price.toLocaleString("en-KE");

  // Calculate total price
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="p-4 lg:px-12 flex flex-col lg:flex-row">
      {/* Cart Items Section */}
      <div className="flex-grow">
        <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item._id}
                className="border rounded-lg p-4 flex flex-col lg:flex-row items-center lg:items-center lg:space-x-4"
              >
                {/* Product Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-32 h-32 object-cover mb-2 lg:mb-0"
                />

                {/* Product Details */}
                <div className="flex-grow text-center lg:text-left">
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-blue-500 font-bold text-lg mt-2">Kshs. {formatPrice(item.price)}</p>
                </div>

                {/* Remove Button */}
                <div className="lg:ml-4 mt-2 lg:mt-0">
                  <button
                    onClick={() => onRemoveFromCart(item._id)}
                    className="bg-red-500 text-white py-2 px-4 rounded-lg text-sm hover:bg-red-600"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Cart Totals Section */}
      {cartItems.length > 0 && (
        <div className="mt-10 lg:mt-0 lg:ml-6 lg:w-1/3">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md lg:relative lg:top-10">
            <h2 className="text-xl font-bold mb-4">Cart totals</h2>
            <div className="flex justify-between mb-4">
              <span className="font-medium">Total</span>
              <span className="font-bold">Kshs. {formatPrice(totalPrice)}</span>
            </div>
            <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
