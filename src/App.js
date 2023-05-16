import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import Home from './Home';
import ProductPage from './components/ProductPage';
import PaymentPage from './components/PaymentPage';
import OrderPlaced from './components/OrderPlaced';



function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/payment/:productID" element={<PaymentPage />} />
        <Route path="/:productID" element={<ProductPage />} />
        <Route path="/orderplaced/:productID" element={<OrderPlaced />} />
      </Routes>
      <Cart />
    </div>
  );
}


export default App;
