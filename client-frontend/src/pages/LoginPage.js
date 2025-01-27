// import React from "react";
// import LoginForm from "../components/auth/LoginForm";

// const LoginPage = () => {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <LoginForm />
//     </div>
//   );
// };

// export default LoginPage;
import React, { useState } from "react";
import LoginForm from "../components/auth/LoginForm";

const LoginPage = () => {
  const [authToken, setAuthToken] = useState("");

  // Define the onLogin function
  const handleLogin = (token) => {
    setAuthToken(token); // Save the token in state
    localStorage.setItem("authToken", token); // Optionally, save it to localStorage
    console.log("Login successful, token saved:", token);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {/* Pass the onLogin prop to LoginForm */}
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;

