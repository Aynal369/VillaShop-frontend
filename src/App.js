import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Home from "./components/views/Home";
import Header from "./components/global/header/Header";
import Login from "./components/views/Login";
import Register from "./components/views/Register";
import AuthProvider from "./authentication/AuthProvider";
import NotFound from "./components/views/NotFound";
import ForgetPassword from "./components/views/ForgetPassword";
import Checkout from "./components/views/Checkout";
import Wishlist from "./components/views/Wishlist";
import ShoppingCart from "./components/views/ShoppingCart";
import Contact from "./components/views/Contact";
import About from "./components/views/About";
import Shop from "./components/views/Shop";
import RequireAuth from "./authentication/RequireAuth";
import Footer from "./components/global/footer/Footer";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route
            path="/checkout"
            element={
              <RequireAuth>
                <Checkout />
              </RequireAuth>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </AuthProvider>
  );
}

export default App;
