// // import React, { useEffect, useState } from "react";
// // import { useParams } from "react-router-dom";
// // import axios from "axios";

// // const ProductDetail = () => {
// //   const { id } = useParams(); // Extract the product ID from the URL
// //   const [product, setProduct] = useState(null);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const fetchProduct = async () => {
// //       try {
// //         const response = await axios.get(`http://localhost:5000/api/products/${id}`);
// //         setProduct(response.data);
// //       } catch (error) {
// //         console.error("Error fetching product:", error);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchProduct();
// //   }, [id]);

// //   if (loading) return <p>Loading...</p>;

// //   if (!product) return <p>Product not found.</p>;

// //   return (
// //     <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between p-6 lg:p-12 space-y-6 lg:space-y-0 lg:space-x-8">
// //       {/* Product Image */}
// //       <div className="lg:w-1/2 flex justify-center">
// //         <img
// //           src={product.image}
// //           alt={product.title}
// //           className="w-full max-w-lg rounded-lg shadow-md object-cover"
// //         />
// //       </div>

// //       {/* Product Details */}
// //       <div className="lg:w-1/2 text-center lg:text-left">
// //         {/* Title */}
// //         <h1 className="text-3xl font-bold mb-4">{product.title}</h1>

// //         {/* Price */}
// //         <p className="text-2xl text-blue-600 font-bold mb-6">Ksh {product.price}</p>

// //         {/* Description */}
// //         <p className="text-gray-700 mb-6">{product.description}</p>

// //         {/* Add to Cart */}
// //         <button className="px-8 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700">
// //           Add to Cart
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProductDetail;
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// const ProductDetail = ({ onAddToCart }) => {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/api/products/${id}`);
//         setProduct(response.data);
//       } catch (error) {
//         console.error("Error fetching product:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProduct();
//   }, [id]);

//   if (loading) return <p>Loading...</p>;
//   if (!product) return <p>Product not found.</p>;

//   const handleAddToCart = () => {
//     onAddToCart(product);
//   };

//   return (
//     <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between p-6 lg:p-12 space-y-6 lg:space-y-0 lg:space-x-8">
//       <div className="lg:w-1/2 flex justify-center">
//         <img
//           src={product.image}
//           alt={product.title}
//           className="w-full max-w-lg rounded-lg shadow-md object-cover"
//         />
//       </div>
//       <div className="lg:w-1/2 text-center lg:text-left">
//         <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
//         <p className="text-2xl text-blue-600 font-bold mb-6">Ksh {product.price}</p>
//         <p className="text-gray-700 mb-6">{product.description}</p>
//         <button
//           className="px-8 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700"
//           onClick={handleAddToCart}
//         >
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetail = ({ onAddToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/products/${id}`);
        console.log(response.data);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!product) return <p>Product not found.</p>;

  const handleAddToCartClick = () => {
    onAddToCart(product);
  };

  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between p-6 lg:p-12 space-y-6 lg:space-y-0 lg:space-x-8">
      <div className="lg:w-1/2 flex justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="w-full max-w-lg rounded-lg shadow-md object-cover"
        />
      </div>
      <div className="lg:w-1/2 text-center lg:text-left">
        <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
        <p className="text-gray-700 mb-6">{product.description}</p>
        <p className="text-2xl text-blue-600 font-bold mb-6">Ksh {product.price}</p>
        <button
          className="px-8 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700"
          onClick={handleAddToCartClick}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;

