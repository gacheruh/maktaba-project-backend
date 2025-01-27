
// // import React, { useState, useEffect } from "react";
// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import Navbar from "./components/NavBars";
// // import Footer from "./components/Footer"
// // import ProductGrid from "./components/ProductGrid";
// // import ProductDetail from "./components/ProductDetail";
// // import CartPage from "./pages/CartPage";
// // import AboutUs from "./pages/AboutUs";
// // import { ToastContainer, toast } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";

// // const App = () => {
// //   const [cart, setCart] = useState(() => {
// //     const savedCart = localStorage.getItem("cart");
// //     return savedCart ? JSON.parse(savedCart) : [];
// //   });

// //   useEffect(() => {
// //     localStorage.setItem("cart", JSON.stringify(cart));
// //   }, [cart]);

// //   const handleAddToCart = (product) => {
// //     if (!cart.some((item) => item._id === product._id)) {
// //       setCart([...cart, product]);
// //       toast.success("Item added to cart successfully!");
// //     } else {
// //       toast.error("Item already exists in the cart!");
// //     }
// //   };

// //   const handleRemoveFromCart = (productId) => {
// //     setCart(cart.filter((item) => item._id !== productId));
// //     toast.info("Item removed from cart.");
// //   };

// //   return (
// //     <Router>
// //       <div>
// //         {/* Toast Notifications */}
// //         <ToastContainer
// //           position="top-center"
// //           autoClose={3000}
// //           hideProgressBar={false}
// //           newestOnTop={false}
// //           closeOnClick
// //           rtl={false}
// //           pauseOnFocusLoss
// //           draggable
// //           pauseOnHover
// //           theme="light"
// //         />

// //         <Navbar cartCount={cart.length} />

// //         <Routes>
// //           <Route
// //             path="/"
// //             element={<ProductGrid onAddToCart={handleAddToCart} />}
// //           />
// //           <Route
// //             path="/product/:id"
// //             element={<ProductDetail onAddToCart={handleAddToCart} />}
// //           />
// //           <Route
// //             path="/cart"
// //             element={
// //               <CartPage
// //                 cartItems={cart}
// //                 onRemoveFromCart={handleRemoveFromCart}
// //               />
// //             }
// //           />
// //           <Route path="/about-us" element={<AboutUs />} />
// //         </Routes>
// //         <Footer />
// //       </div>
// //     </Router>
// //   );
// // };

// // export default App;

// // import React, { useState, useEffect } from "react";
// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import Navbar from "./components/NavBars";
// // import Footer from "./components/Footer";
// // import ProductGrid from "./components/ProductGrid";
// // import ProductDetail from "./components/ProductDetail";
// // import CartPage from "./pages/CartPage";
// // import AboutUs from "./pages/AboutUs";
// // import LoginPage from "./pages/LoginPage"; 
// // import RegisterPage from "./pages/RegisterPage"; 
// // import { ToastContainer, toast } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";

// // const App = () => {
// //   const [cart, setCart] = useState(() => {
// //     const savedCart = localStorage.getItem("cart");
// //     return savedCart ? JSON.parse(savedCart) : [];
// //   });

// //   useEffect(() => {
// //     localStorage.setItem("cart", JSON.stringify(cart));
// //   }, [cart]);

// //   const handleAddToCart = (product) => {
// //     if (!cart.some((item) => item._id === product._id)) {
// //       setCart([...cart, product]);
// //       toast.success("Item added to cart successfully!");
// //     } else {
// //       toast.error("Item already exists in the cart!");
// //     }
// //   };

// //   const handleRemoveFromCart = (productId) => {
// //     setCart(cart.filter((item) => item._id !== productId));
// //     toast.info("Item removed from cart.");
// //   };

// //   return (
// //     <Router>
// //       <div>
// //         {/* Toast Notifications */}
// //         <ToastContainer
// //           position="top-center"
// //           autoClose={3000}
// //           hideProgressBar={false}
// //           newestOnTop={false}
// //           closeOnClick
// //           rtl={false}
// //           pauseOnFocusLoss
// //           draggable
// //           pauseOnHover
// //           theme="light"
// //         />

// //         <Navbar cartCount={cart.length} />

// //         <Routes>
// //           <Route
// //             path="/"
// //             element={<ProductGrid onAddToCart={handleAddToCart} />}
// //           />
// //           <Route
// //             path="/product/:id"
// //             element={<ProductDetail onAddToCart={handleAddToCart} />}
// //           />
// //           <Route
// //             path="/cart"
// //             element={
// //               <CartPage
// //                 cartItems={cart}
// //                 onRemoveFromCart={handleRemoveFromCart}
// //               />
// //             }
// //           />
// //           <Route path="/about-us" element={<AboutUs />} />
// //           <Route path="/login" element={<LoginPage />} /> 
// //           <Route path="/register" element={<RegisterPage />} /> 
// //         </Routes>
// //         <Footer />
// //       </div>
// //     </Router>
// //   );
// // };

// // export default App;
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBars";
import Footer from "./components/Footer";
import ProductGrid from "./components/ProductGrid";
import ProductDetail from "./components/ProductDetail";
import CartPage from "./pages/CartPage";
import AboutUs from "./pages/AboutUs";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (product) => {
    if (!cart.some((item) => item._id === product._id)) {
      setCart([...cart, product]);
      toast.success("Item added to cart successfully!");
    } else {
      toast.error("Item already exists in the cart!");
    }
  };

  const handleRemoveFromCart = (productId) => {
    setCart(cart.filter((item) => item._id !== productId));
    toast.info("Item removed from cart.");
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Toast Notifications */}
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />

        <Navbar cartCount={cart.length} />
        
        {/* Main content should grow to fill available space */}
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={<ProductGrid onAddToCart={handleAddToCart} />}
            />
            <Route
              path="/product/:id"
              element={<ProductDetail onAddToCart={handleAddToCart} />}
            />
            <Route
              path="/cart"
              element={
                <CartPage
                  cartItems={cart}
                  onRemoveFromCart={handleRemoveFromCart}
                />
              }
            />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
