import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import Home from './Home';
import ProductPage from './components/ProductPage';
import PaymentPage from './components/PaymentPage';



function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/:productID" element={<ProductPage />} />
      </Routes>
      <Cart />
    </div>
  );
}


export default App;
