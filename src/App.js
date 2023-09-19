import {Route,Routes} from 'react-router-dom';
import React,{useState} from "react";
import Home from './screens/Home';
import Product from './screens/Product';
import Cart from './screens/Cart';
import Checkout from './screens/Checkout';
import Completed from './screens/Completed';
import NavBar from './components/NavBar';
import ItemDetails from './ItemDetails';
import Menu from './components/HomeComponents/Menu';
import Menudetail from './components/Menudetail';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/completed" element={<Completed/>} />
        <Route path="/item/:id" element={<ItemDetails/>} />
        <Route path='/completed' element={<Completed/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/menu' element={<Menudetail/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </>
  );
}

export default App;
