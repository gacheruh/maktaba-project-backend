// // import React, { useState } from "react";
// // import { Link, useNavigate } from "react-router-dom";
// // import { toast } from "react-toastify"; // Remove ToastContainer import

// // const LoginForm = ({ onLogin }) => {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const navigate = useNavigate();

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     try {
// //       const response = await fetch("http://localhost:5000/api/users/login", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify({ email, password }),
// //       });

// //       const data = await response.json();

// //       if (response.ok) {
// //         onLogin(data.token); // Call the onLogin function with the token
// //         toast.success("Login successful!");
// //         setTimeout(() => {
// //           navigate("/"); // Redirect to the home page after a short delay
// //         }, 2000); // Adjust the delay as needed
// //       } else {
// //         toast.error(data.message || "Login failed!");
// //       }
// //     } catch (error) {
// //       console.error("Error during login:", error);
// //       toast.error("Something went wrong. Please try again.");
// //     }
// //   };

// //   return (
// //     <div className="flex justify-center items-center min-h-screen bg-gray-100">
// //       <form
// //         onSubmit={handleSubmit}
// //         className="w-full max-w-xl mx-auto p-8 border rounded-lg shadow-md bg-white"
// //       >
// //         <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
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
// //           className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
// //         >
// //           Login
// //         </button>
// //         <div className="mt-4 text-center">
// //           <p>
// //             Don’t have an account?{" "}
// //             <Link to="/register" className="text-blue-500 hover:underline">
// //               Register here
// //             </Link>
// //           </p>
// //         </div>
// //       </form>
// //     </div>
// //   );
// // };

// // export default LoginForm;
// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

// const LoginForm = ({ onLogin }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch("http://localhost:5000/api/users/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         onLogin(data.token);
//         toast.success("Login successful!");
//         setTimeout(() => {
//           navigate("/");
//         }, 2000);
//       } else {
//         toast.error(data.message || "Login failed!");
//       }
//     } catch (error) {
//       console.error("Error during login:", error);
//       toast.error("Something went wrong. Please try again.");
//     }
//   };

//   return (
//     <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
//       {/* Page Title */}
//       <h1 className="text-4xl font-bold text-center mb-8 text-blue-500">
//         Welcome to Maktaba Shop
//       </h1>
//       <p className="text-center text-gray-600 mb-6">
//         Your one-stop shop for books, electronics, and more.
//       </p>

//       {/* Login Form */}
//       <form
//         onSubmit={handleSubmit}
//         className="w-full max-w-xl mx-auto p-8 border rounded-lg shadow-md bg-white"
//       >
//         <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
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
//           className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
//         >
//           Login
//         </button>
//         <div className="mt-4 text-center">
//           <p>
//             Don’t have an account?{" "}
//             <Link to="/register" className="text-blue-500 hover:underline">
//               Register here
//             </Link>
//           </p>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default LoginForm;
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State for password visibility
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        onLogin(data.token); // Call the onLogin function with the token
        toast.success("Login successful!");
        setTimeout(() => {
          navigate("/"); // Redirect to the home page after a short delay
        }, 2000);
      } else {
        toast.error(data.message || "Login failed!");
      }
    } catch (error) {
      console.error("Error during login:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-center mb-4 text-blue-500">
        Welcome to Maktaba
      </h1>
      <p className="text-center text-gray-600 mb-6">
        Your one-stop shop for books, electronics, and more.
      </p>

      {/* Login Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg mx-auto p-6 border rounded-lg shadow-md bg-white"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
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
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
        >
          Login
        </button>
        <div className="mt-4 text-center">
          <p>
            Don’t have an account?{" "}
            <Link to="/register" className="text-blue-500 hover:underline">
              Register here
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
