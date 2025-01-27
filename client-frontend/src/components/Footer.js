// import React from "react";
// import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="bg-gray-800 text-white py-6 mt-10">
//       <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
//         {/* Brand Section */}
//         <div className="mb-4 md:mb-0">
//           <h1 className="text-2xl font-bold">Maktaba</h1>
//           <p className="text-sm text-gray-400">
//             Your go-to marketplace for books and school essentials.
//           </p>
//         </div>

//         {/* Navigation Links */}
//         <div className="flex space-x-6 mb-4 md:mb-0">
//           <a href="#" className="text-gray-400 hover:text-white">
//             About Us
//           </a>
//           <a href="#" className="text-gray-400 hover:text-white">
//             Contact
//           </a>
//           <a href="#" className="text-gray-400 hover:text-white">
//             Terms of Service
//           </a>
//           <a href="#" className="text-gray-400 hover:text-white">
//             Privacy Policy
//           </a>
//         </div>

//         {/* Social Media Icons */}
//         <div className="flex space-x-4">
//           <a
//             href="#"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-gray-400 hover:text-blue-500"
//           >
//             <FaFacebookF className="text-xl" />
//           </a>
//           <a
//             href="#"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-gray-400 hover:text-blue-400"
//           >
//             <FaTwitter className="text-xl" />
//           </a>
//           <a
//             href="#"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-gray-400 hover:text-pink-500"
//           >
//             <FaInstagram className="text-xl" />
//           </a>
//         </div>
//       </div>

//       {/* Copyright Section */}
//       <div className="text-center text-gray-500 text-sm mt-4">
//         © {new Date().getFullYear()} Maktaba. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Brand Section */}
        <div className="mb-4 md:mb-0">
          <h1 className="text-2xl font-bold">Maktaba</h1>
          <p className="text-sm text-gray-400">
            Your go-to marketplace for books and school essentials.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a href="#" className="text-gray-400 hover:text-white">
            About Us
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Contact
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Terms of Service
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Privacy Policy
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500"
          >
            <FaFacebookF className="text-xl" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400"
          >
            <FaTwitter className="text-xl" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-pink-500"
          >
            <FaInstagram className="text-xl" />
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-gray-500 text-sm mt-4">
        © {new Date().getFullYear()} Maktaba. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
