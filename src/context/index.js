import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const useCartContext = () => {
  const context = useContext(CartContext);

  return context;
};

export const CartProvider = ({ children }) => {
  const [cart, updateCart] = useState(3);

  const setCart = (cart) => {
    updateCart(cart);
  };

  const contexts = { cart, setCart };

  return (
    <CartContext.Provider value={contexts}>{children}</CartContext.Provider>
  );
};
