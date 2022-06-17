import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const useCartContext = () => {
  const context = useContext(CartContext);

  return context;
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const handleShowCart = () => setShowCart(!showCart);

  const addToCart = (newItem) => {
    setCart((prevItem) => {
      const existingItem = prevItem.find((item) => item.id == newItem.id);

      if (existingItem) {
        const filterList = prevItem.filter(
          (item) => item.id != existingItem.id
        );
        const updatePrevItems = [...filterList, newItem];

        return updatePrevItems;
      } else return [...prevItem, newItem];
    });
  };

  const removeFromCart = (id) => {
    const currentItems = cart.filter((item) => item.id != id);
    setCart(currentItems);
  };

  const checkOut = () => {
    setCart([]);
    handleShowCart();
  };

  const contexts = {
    cart,
    addToCart,
    showCart,
    handleShowCart,
    removeFromCart,
    checkOut,
  };

  return (
    <CartContext.Provider value={contexts}>{children}</CartContext.Provider>
  );
};
