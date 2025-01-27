
// // import React, { useEffect, useState } from "react";
// // import ProductCard from "./ProductCards";
// // import axios from "axios";

// // const ProductsGrid = () => {
// //   const [groupedProducts, setGroupedProducts] = useState({});

// //   useEffect(() => {
// //     const fetchProducts = async () => {
// //       try {
// //         const response = await axios.get("http://localhost:5000/api/products");
// //         const productsData = response.data;

// //         // Group products by category
// //         const grouped = productsData.reduce((acc, product) => {
// //           acc[product.category] = acc[product.category] || [];
// //           acc[product.category].push(product);
// //           return acc;
// //         }, {});

// //         // Ensure "Books" category is always first
// //         const sortedCategories = Object.keys(grouped).sort((a, b) => {
// //           if (a === "Books") return -1;
// //           if (b === "Books") return 1;
// //           return a.localeCompare(b);
// //         });

// //         // Reorganize grouped products
// //         const sortedGrouped = sortedCategories.reduce((acc, key) => {
// //           acc[key] = grouped[key];
// //           return acc;
// //         }, {});

// //         setGroupedProducts(sortedGrouped);
// //       } catch (error) {
// //         console.error("Error fetching products:", error);
// //       }
// //     };

// //     fetchProducts();
// //   }, []);

// //   return (
// //     <div className="p-4 flex justify-center">
// //       <div className="max-w-screen-xl w-full">
// //         {Object.entries(groupedProducts).map(([category, items]) => (
// //           <div key={category} className="mb-8">
// //             <h2 className="text-2xl font-bold mb-4 capitalize">{category}</h2>
// //             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
// //               {items.map((product) => (
// //                 <ProductCard key={product._id} product={product} />
// //               ))}
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProductsGrid;
// // import React, { useEffect, useState } from "react";
// // import { toast } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";
// // import ProductCard from "./ProductCards";
// // import axios from "axios";
// // import Navbar from "./NavBars";

// // const ProductGrid = () => {
// //   const [groupedProducts, setGroupedProducts] = useState({});
// //   const [cart, setCart] = useState([]);

// //   useEffect(() => {
// //     const fetchProducts = async () => {
// //       try {
// //         const response = await axios.get("http://localhost:5000/api/products");
// //         const productsData = response.data;

// //         const grouped = productsData.reduce((acc, product) => {
// //           acc[product.category] = acc[product.category] || [];
// //           acc[product.category].push(product);
// //           return acc;
// //         }, {});

// //         const sortedCategories = Object.keys(grouped).sort((a, b) => {
// //           if (a === "Books") return -1;
// //           if (b === "Books") return 1;
// //           return a.localeCompare(b);
// //         });

// //         const sortedGrouped = sortedCategories.reduce((acc, key) => {
// //           acc[key] = grouped[key];
// //           return acc;
// //         }, {});

// //         setGroupedProducts(sortedGrouped);
// //       } catch (error) {
// //         console.error("Error fetching products:", error);
// //       }
// //     };

// //     fetchProducts();
// //   }, []);

// //   const handleAddToCart = (product) => {
// //     if (cart.some((item) => item._id === product._id)) {
// //       toast.error("This item is already in the cart!");
// //       return;
// //     }

// //     setCart([...cart, product]);
// //     toast.success(`${product.title} has been added to the cart!`);
// //   };

// //   return (
// //     <div>
// //       <div className="p-4">
// //         {Object.entries(groupedProducts).map(([category, items]) => (
// //           <div key={category} className="mb-8">
// //             <h2 className="text-xl font-bold mb-4 capitalize">{category}</h2>
// //             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
// //               {items.map((product) => (
// //                 <ProductCard
// //                   key={product._id}
// //                   product={product}
// //                   onAddToCart={() => handleAddToCart(product)}
// //                 />
// //               ))}
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProductGrid;
// import React, { useEffect, useState } from "react";
// import ProductCard from "./ProductCards";
// import axios from "axios";

// const ProductGrid = ({ onAddToCart }) => {
//   const [groupedProducts, setGroupedProducts] = useState({});

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/api/products");
//         const productsData = response.data;

//         const grouped = productsData.reduce((acc, product) => {
//           acc[product.category] = acc[product.category] || [];
//           acc[product.category].push(product);
//           return acc;
//         }, {});

//         const sortedCategories = Object.keys(grouped).sort((a, b) => {
//           if (a === "Books") return -1;
//           if (b === "Books") return 1;
//           return a.localeCompare(b);
//         });

//         const sortedGrouped = sortedCategories.reduce((acc, key) => {
//           acc[key] = grouped[key];
//           return acc;
//         }, {});

//         setGroupedProducts(sortedGrouped);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <div className="p-4">
//       {Object.entries(groupedProducts).map(([category, items]) => (
//         <div key={category} className="mb-8">
//           <h2 className="text-xl font-bold mb-4 capitalize">{category}</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//             {items.map((product) => (
//               <ProductCard
//                 key={product._id}
//                 product={product}
//                 onAddToCart={() => onAddToCart(product)}
//               />
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProductGrid;
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCards";
import axios from "axios";

const ProductGrid = ({ onAddToCart }) => {
  const [groupedProducts, setGroupedProducts] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products");
        const productsData = response.data;

        const grouped = productsData.reduce((acc, product) => {
          acc[product.category] = acc[product.category] || [];
          acc[product.category].push(product);
          return acc;
        }, {});

        const sortedCategories = Object.keys(grouped).sort((a, b) => {
          if (a === "Books") return -1;
          if (b === "Books") return 1;
          return a.localeCompare(b);
        });

        const sortedGrouped = sortedCategories.reduce((acc, key) => {
          acc[key] = grouped[key];
          return acc;
        }, {});

        setGroupedProducts(sortedGrouped);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="p-4 max-w-screen-xl mx-auto">
      {Object.entries(groupedProducts).map(([category, items]) => (
        <div key={category} className="mb-8">
          <h2 className="text-xl font-bold mb-4 capitalize">{category}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {items.map((product) => (
              <ProductCard
                key={product._id}
                product={product}
                onAddToCart={() => onAddToCart(product)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
