// import React, { useState } from "react";
// import { FaShoppingCart } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// const ProductCard = ({ product, onAddToCart }) => {
//   const [hovered, setHovered] = useState(false);
//   const navigate = useNavigate();

//   const handleCardClick = () => {
//     navigate(`/product/${product._id}`); // Use product._id to generate the URL
//   };

//   const handleCartClick = (event) => {
//     event.stopPropagation(); // Prevent navigation to the detail page
//     onAddToCart();
//   };

//   return (
//     <div
//       className="relative bg-white border rounded-lg shadow-md p-4 transition-transform transform hover:scale-105 cursor-pointer"
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       onClick={handleCardClick}
//       style={{ width: "250px", height: "400px" }} // Fixed dimensions for consistency
//     >
//       {/* Image Container */}
//       <div className="w-full h-2/3 overflow-hidden rounded-md">
//         <img
//           src={product.image}
//           alt={product.title}
//           className="w-full h-full object-cover"
//         />
//       </div>

//       {/* Title */}
//       <h3 className="text-lg font-semibold mt-4 line-clamp-2">{product.title}</h3>

//       {/* Price */}
//       <p className="text-blue-500 font-bold text-lg mt-2">Ksh {product.price}</p>

//       {/* Add to Cart Button */}
//       {hovered && (
//         <div className="absolute top-2 right-2">
//           <button
//             className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600"
//             title="Add to cart"
//             onClick={handleCartClick}
//           >
//             <FaShoppingCart className="text-xl" />
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProductCard;

import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product, onAddToCart }) => {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();
  const formatPrice = (price) => price.toLocaleString("en-KE");

  const handleCardClick = () => {
    navigate(`/product/${product._id}`);
  };

  const handleCartClick = (event) => {
    event.stopPropagation();
    onAddToCart();
  };

  return (
    <div
      className="relative bg-white border rounded-lg shadow-md p-4 transition-transform transform hover:scale-105 cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleCardClick}
      style={{ width: "250px", height: "400px" }}
    >
      <div className="w-full h-2/3 overflow-hidden rounded-md">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-lg font-semibold mt-4 line-clamp-2">{product.title}</h3>
      <p className="text-blue-500 font-bold text-lg mt-2">Ksh {product.price}</p>

      {hovered && (
        <div className="absolute top-2 right-2">
          <button
            className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600"
            title="Add to cart"
            onClick={handleCartClick}
          >
            <FaShoppingCart className="text-xl" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
