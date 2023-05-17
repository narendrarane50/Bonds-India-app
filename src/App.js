import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import Home from "./Home";
import ProductPage from "./components/ProductPage";
import PaymentPage from "./components/PaymentPage";
import OrderPlaced from "./components/OrderPlaced";
import { useState } from "react";
import LoginPage from "./components/LoginPage";
import RegistrationPage from "./components/RegisterPage";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  

  return (
    <div className="bg-gray-100 min-h-screen">
      <Routes>
        <Route path="/register" element={<RegistrationPage />} />
      </Routes>
      {isLogin === true ? (
        <>
          <NavBar setIsLogin={setIsLogin} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/payment/:productID" element={<PaymentPage />} />  
            <Route path="/:productID" element={<ProductPage />} />
            <Route path="/orderplaced/:productID" element={<OrderPlaced />} />
          </Routes>
          <Cart />
        </>
      ) : (
        <>
          <Routes>
            <Route path="/" element={<LoginPage setIsLogin={setIsLogin} />} />
          </Routes>
        </>
      )}
    </div>
  );
}


export default App;
