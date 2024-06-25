import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar/NavBar';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import Footer from '../components/Footer/Footer';
import Bienvenido from '../components/Bienvenido/Bienvenido';
import CartProvider from  '../context/cart/CartProvider'
import ItemCartContainer from '../components/ItemCartContainer/ItemCartContainer';
import CheckoutContainer from '../components/CheckoutContainer/CheckoutContainer';


function App() {
  return (
    <div className='App'>
    <Router>
    <CartProvider>
      <Navbar />
      <Bienvenido/>
      
        <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/category/:categoryid" element={<ItemListContainer/>}/>
        <Route path="/detail/:id" element={<ItemDetailContainer/>}/>
        <Route path="/cart" element={<ItemCartContainer/>}/>
        <Route path="/checkout" element={<CheckoutContainer/>}/>
        
        </Routes>
      </CartProvider>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
