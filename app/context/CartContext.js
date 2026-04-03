"use client";
import { createContext, useState, useEffect, useContext } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Load from local storage
    setIsMounted(true);
    const saved = localStorage.getItem("arjel_cart");
    if (saved) {
      setCart(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("arjel_cart", JSON.stringify(cart));
    }
  }, [cart, isMounted]);

  const addToCart = (product, quantity = 1) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.slug === product.slug);
      if (exists) {
        return prev.map((item) =>
          item.slug === product.slug
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      // Assuming product passed has {slug, name, price, img}
      return [...prev, { ...product, quantity }];
    });
    setCartOpen(true);
  };

  const removeFromCart = (slug) => {
    setCart((prev) => prev.filter((item) => item.slug !== slug));
  };

  const updateQuantity = (slug, quantity) => {
    if (quantity < 1) {
      removeFromCart(slug);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.slug === slug ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => setCart([]);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
        cartOpen,
        setCartOpen
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
