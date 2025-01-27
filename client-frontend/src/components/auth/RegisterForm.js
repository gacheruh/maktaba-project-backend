// // // import React, { useState } from "react";
// // // import { Link } from "react-router-dom";

// // // const RegisterForm = () => {
// // //   const [name, setName] = useState("");
// // //   const [email, setEmail] = useState("");
// // //   const [password, setPassword] = useState("");

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();

// // //     // Call backend API to register
// // //     const response = await fetch("http://localhost:5000/api/users/register", {
// // //       method: "POST",
// // //       headers: {
// // //         "Content-Type": "application/json",
// // //       },
// // //       body: JSON.stringify({ name, email, password }),
// // //     });

// // //     const data = await response.json();

// // //     if (response.ok) {
// // //       alert("Registration successful! Please login.");
// // //       window.location.href = "/login";
// // //     } else {
// // //       alert(data.message || "Registration failed!");
// // //     }
// // //   };

// // //   return (
// // //     <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 border rounded-lg shadow-md">
// // //       <h2 className="text-xl font-bold mb-4">Register</h2>
// // //       <div className="mb-4">
// // //         <label htmlFor="name" className="block font-medium mb-1">
// // //           Name
// // //         </label>
// // //         <input
// // //           id="name"
// // //           type="text"
// // //           value={name}
// // //           onChange={(e) => setName(e.target.value)}
// // //           className="w-full border rounded-lg px-3 py-2"
// // //           required
// // //         />
// // //       </div>
// // //       <div className="mb-4">
// // //         <label htmlFor="email" className="block font-medium mb-1">
// // //           Email
// // //         </label>
// // //         <input
// // //           id="email"
// // //           type="email"
// // //           value={email}
// // //           onChange={(e) => setEmail(e.target.value)}
// // //           className="w-full border rounded-lg px-3 py-2"
// // //           required
// // //         />
// // //       </div>
// // //       <div className="mb-4">
// // //         <label htmlFor="password" className="block font-medium mb-1">
// // //           Password
// // //         </label>
// // //         <input
// // //           id="password"
// // //           type="password"
// // //           value={password}
// // //           onChange={(e) => setPassword(e.target.value)}
// // //           className="w-full border rounded-lg px-3 py-2"
// // //           required
// // //         />
// // //       </div>
// // //       <button
// // //         type="submit"
// // //         className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
// // //       >
// // //         Register
// // //       </button>
// // //       <div className="mt-4 text-center">
// // //         <p>
// // //           Already have an account?{" "}
// // //           <Link to="/login" className="text-blue-500 hover:underline">
// // //             Login here
// // //           </Link>
// // //         </p>
// // //       </div>
// // //     </form>
// // //   );
// // // };

// // // export default RegisterForm;
// // import React, { useState } from "react";
// // import { Link } from "react-router-dom";
// // import { ToastContainer, toast } from "react-toastify";
// // import 'react-toastify/dist/ReactToastify.css';

// // const RegisterForm = () => {
// //   const [name, setName] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     try {
// //       // Call backend API to register
// //       const response = await fetch("http://localhost:5000/api/users/register", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify({ name, email, password }),
// //       });

// //       const data = await response.json();

// //       if (response.ok) {
// //         toast.success("Registration successful! Please login.");
// //         setTimeout(() => {
// //           window.location.href = "/login";
// //         }, 2000); // Redirect after 2 seconds
// //       } else {
// //         toast.error(data.message || "Registration failed!");
// //       }
// //     } catch (error) {
// //       toast.error("Something went wrong. Please try again.");
// //     }
// //   };

// //   return (
// //     <div>
// //       <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 border rounded-lg shadow-md">
// //         <h2 className="text-xl font-bold mb-4">Register</h2>
// //         <div className="mb-4">
// //           <label htmlFor="name" className="block font-medium mb-1">
// //             Name
// //           </label>
// //           <input
// //             id="name"
// //             type="text"
// //             value={name}
// //             onChange={(e) => setName(e.target.value)}
// //             className="w-full border rounded-lg px-3 py-2"
// //             required
// //           />
// //         </div>
// //         <div className="mb-4">
// //           <label htmlFor="email" className="block font-medium mb-1">
// //             Email
// //           </label>
// //           <input
// //             id="email"
// //             type="email"
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //             className="w-full border rounded-lg px-3 py-2"
// //             required
// //           />
// //         </div>
// //         <div className="mb-4">
// //           <label htmlFor="password" className="block font-medium mb-1">
// //             Password
// //           </label>
// //           <input
// //             id="password"
// //             type="password"
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //             className="w-full border rounded-lg px-3 py-2"
// //             required
// //           />
// //         </div>
// //         <button
// //           type="submit"
// //           className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
// //         >
// //           Register
// //         </button>
// //         <div className="mt-4 text-center">
// //           <p>
// //             Already have an account?{" "}
// //             <Link to="/login" className="text-blue-500 hover:underline">
// //               Login here
// //             </Link>
// //           </p>
// //         </div>
// //       </form>
// //       <ToastContainer />
// //     </div>
// //   );
// // };

// // export default RegisterForm;
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';

// const RegisterForm = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch("http://localhost:5000/api/users/register", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ name, email, password }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         toast.success("Registration successful! Please login.");
//         setTimeout(() => {
//           window.location.href = "/login";
//         }, 2000); // Redirect after 2 seconds
//       } else {
//         toast.error(data.message || "Registration failed!");
//       }
//     } catch (error) {
//       toast.error("Something went wrong. Please try again.");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <form
//         onSubmit={handleSubmit}
//         className="w-full max-w-lg mx-auto p-6 border rounded-lg shadow-md bg-white"
//       >
//         <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
//         <div className="mb-4">
//           <label htmlFor="name" className="block font-medium mb-1">
//             Name
//           </label>
//           <input
//             id="name"
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="w-full border rounded-lg px-3 py-2"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="email" className="block font-medium mb-1">
//             Email
//           </label>
//           <input
//             id="email"
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full border rounded-lg px-3 py-2"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="password" className="block font-medium mb-1">
//             Password
//           </label>
//           <input
//             id="password"
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full border rounded-lg px-3 py-2"
//             required
//           />
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
//         >
//           Register
//         </button>
//         <div className="mt-4 text-center">
//           <p>
//             Already have an account?{" "}
//             <Link to="/login" className="text-blue-500 hover:underline">
//               Login here
//             </Link>
//           </p>
//         </div>
//       </form>
//       <ToastContainer />
//     </div>
//   );
// };

// export default RegisterForm;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Registration successful! Please login.");
        setTimeout(() => {
          window.location.href = "/login";
        }, 2000); // Redirect after 2 seconds
      } else {
        toast.error(data.message || "Registration failed!");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-center mb-4 text-green-500">
        Welcome to Maktaba Shop
      </h1>
      <p className="text-center text-gray-600 mb-6">
        Your ultimate destination for books, electronics, and academic resources.
      </p>

      {/* Registration Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg mx-auto p-6 border rounded-lg shadow-md bg-white"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block font-medium mb-1">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded-lg px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-medium mb-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded-lg px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block font-medium mb-1">
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border rounded-lg px-3 py-2"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
        >
          Register
        </button>
        <div className="mt-4 text-center">
          <p>
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login here
            </Link>
          </p>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default RegisterForm;
