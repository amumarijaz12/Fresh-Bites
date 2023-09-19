import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../store/Context";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const contextApi = useContext(CartContext);

  const count = contextApi.cartItems.length;

  return (
    <div className="  lg:flex md:flex md:justify-between   lg:justify-between sm:space-x-2
    block lg:pt-6 container sm:pt-4 bg-[#fecaca]">
      <div className="flex">
      <button
        className="block  md:hidden  lg:hidden text-white focus:outline-none"
        onClick={toggleMenu}
      >
        <img className="h-6 mt-[-25px]" src="../image/hamburger.png" />
      </button>
      <Link to='/'>
      <div className="flex">
        <h1 className="font-bold inline-flex g-1 lg:pl-[180px] mt-7">
          Fresh <h1>Bites</h1>
        </h1>
        <img className="mt-5" src="/image/bowl.svg" />
        </div>
        </Link>
      </div>
      
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } md:flex md:items-center md:flex-row lg:flex lg:flex-row  sm:flex-col    lg:space-x-6 md:space-x-6 sm:space-x-3`}
      >
        <Link to="/">
          <button className="mt-7 hover:bg-red-500 hover:rounded-full hover:text-white block  font-bold">Home</button>
        </Link>
        <Link to="/menu">
          
          <button className="mt-7 hover:bg-red-500 hover:rounded-full hover:text-white block font-bold">Menu</button>{" "}
        </Link>
        <button className="mt-7 hover:bg-red-500 hover:rounded-full hover:text-white block font-bold">How it Works</button>
        <Link to='/about'><button className="mt-7 hover:bg-red-500 hover:rounded-full hover:text-white block font-bold">About</button> </Link>
        <Link to='/contact'> <button className="mt-7 hover:bg-red-500 hover:rounded-full hover:text-white block font-bold">Contact</button> </Link>
      </div>
      <div className="flex pt-4 gap-2">
        <div className="relative">
          <Link to="/cart">
            <img
              className="cart relative h-6 hover:bg-red-500 bg-[#fecaca] mr-6 mt-3"
              src="/image/cart1.jpeg"
            />{" "}
          </Link>
          <div className="bg-[yellow] rounded-full">
            <p className="text-[10px] absolute top-[-1px] right-[20px] z-16 bg-[yellow] ">
              {count}
            </p>
          </div>
        </div>
        <Link to='/checkout'>
        <div className="hover:text-white ">
        <button className="flex  bg-red-400 hover:bg-red-600 circle p-2 gap-1 rounded-full ">
          <img className="pt-1 " src="/image/signin.svg" />
          <h1 className="font-bold flex gap-1 ">
            Sign<h1>in</h1>
          </h1>
        </button>
        </div>
        </Link>
      </div>
      {/* <Link to="/"><button>Home</button></Link>
        <Link to="/product"><button>Product</button></Link>
        <Link to="/cart"><button>Cart</button></Link>
        <Link to="/checkout"><button>Checkout</button></Link>
        <Link to="/completed"><button>Completed</button></Link> */}
    </div>
  );
};

export default NavBar;
