import React, { createContext,useState } from "react";

export const CartContext = createContext({
  cartItems: [],
  addToCart:function addToCart(){},
  removeFromCart:function removeFromCart(){}
});

function CartContextProvider({ children }) {

    const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };



  const removeFromCart = (index) => {
    const updatedCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCartItems);
  };

  const value = {
    cartItems:cartItems,
    addToCart:addToCart,
    removeFromCart:removeFromCart

  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export default CartContextProvider;
