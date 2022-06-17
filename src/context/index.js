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
        const itemList = [];

        prevItem.map((item) => {
          if (item.id == existingItem.id) {
            const updatedItem = {
              ...item,
              quantity: newItem.quantity,
              cost: newItem.cost,
              addOns: newItem.addOns,
            };

            itemList.push(updatedItem);
          } else itemList.push(item);
        });

        return itemList;
      } else return [...prevItem, newItem];
    });
  };

  const removeFromCart = (id) => {
    const currentItems = cart.filter((item) => item.id != id);
    setCart(currentItems);
  };

  const contexts = {
    cart,
    addToCart,
    showCart,
    handleShowCart,
    removeFromCart,
  };

  return (
    <CartContext.Provider value={contexts}>{children}</CartContext.Provider>
  );
};
