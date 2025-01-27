// // import React from "react";
// // import { FaShoppingCart, FaBook, FaSearch } from "react-icons/fa";

// // const Navbar = ({ cartCount }) => {
// //   return (
// //     <nav className="bg-white shadow-md py-4 px-6 flex items-center justify-between">
// //       {/* Logo Section */}
// //       <div className="flex items-center space-x-2">
// //         <FaBook className="text-blue-500 text-xl" />
// //         <h1 className="text-2xl font-bold text-gray-800">Maktaba</h1>
// //       </div>

// //       {/* Search Bar */}
// //       <div className="flex-grow max-w-md mx-6">
// //         <div className="relative">
// //           <input
// //             type="text"
// //             placeholder="Search products, books, electronics, e.t.c"
// //             className="w-full border border-gray-300 rounded-md py-2 pl-10 pr-4 focus:ring-2 focus:ring-orange-500 outline-none"
// //           />
// //           <FaSearch className="absolute left-3 top-2.5 text-blue-500" />
// //         </div>
// //       </div>

// //       {/* About Us & Cart Section */}
// //       <div className="flex items-center space-x-6">
// //         <button className="text-gray-800 font-medium hover:text-orange-500">
// //           About Us
// //         </button>
// //         <div className="relative">
// //           <FaShoppingCart className="text-2xl text-gray-800" />
// //           <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
// //             {cartCount}
// //           </span>
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;
// import React from "react";
// import { Link } from "react-router-dom";
// import { FaShoppingCart, FaBook, FaSearch } from "react-icons/fa";

// const Navbar = ({ cartCount }) => {
//   return (
//     <nav className="bg-white shadow-md py-4 px-6 flex items-center justify-between">
//       {/* Logo Section */}
//       <div className="flex items-center space-x-2">
//         <Link to="/" className="flex items-center">
//           <FaBook className="text-blue-500 text-xl" />
//           <h1 className="text-2xl font-bold text-gray-800">Maktaba</h1>
//         </Link>
//       </div>

//       {/* Search Bar */}
//       <div className="flex-grow max-w-md mx-6">
//         <div className="relative">
//           <input
//             type="text"
//             placeholder="Search products, books, electronics, e.t.c"
//             className="w-full border border-gray-300 rounded-md py-2 pl-10 pr-4 focus:ring-2 focus:ring-orange-500 outline-none"
//           />
//           <FaSearch className="absolute left-3 top-2.5 text-blue-500" />
//         </div>
//       </div>

//       {/* About Us & Cart Section */}
//       <div className="flex items-center space-x-6">
//         <Link to="/about-us" className="text-gray-800 font-medium hover:text-orange-500">
//           About Us
//         </Link>
//         <Link to="/cart" className="relative">
//           <FaShoppingCart className="text-2xl text-gray-800" />
//           <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
//             {cartCount}
//           </span>
//         </Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaBook, FaSearch } from "react-icons/fa";

const Navbar = ({ cartCount, isAuthenticated, onLogout }) => {
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-md py-4 px-6 flex items-center justify-between">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <Link to="/" className="flex items-center">
          <FaBook className="text-blue-500 text-xl" />
          <h1 className="text-2xl font-bold text-gray-800">Maktaba</h1>
        </Link>
      </div>

      {/* Search Bar */}
      <div className="flex-grow max-w-md mx-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search products, books, electronics, e.t.c"
            className="w-full border border-gray-300 rounded-md py-2 pl-10 pr-4 focus:ring-2 focus:ring-orange-500 outline-none"
          />
          <FaSearch className="absolute left-3 top-2.5 text-blue-500" />
        </div>
      </div>

      {/* Buttons and Cart Section */}
      <div className="flex items-center space-x-6">
        <Link to="/about-us" className="text-gray-800 font-medium hover:text-orange-500">
          About Us
        </Link>
        <Link to="/cart" className="relative">
          <FaShoppingCart className="text-2xl text-gray-800" />
          <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
            {cartCount}
          </span>
        </Link>

        {isAuthenticated ? (
          <button
            onClick={() => {
              onLogout();
              navigate("/login"); // Redirect to login page after logout
            }}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/login"
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

