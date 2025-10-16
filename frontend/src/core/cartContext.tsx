import { createContext, useContext, useState, type ReactNode } from "react";
import type { Cart } from "./types";

interface CartContext {
  cart: Cart | null;
  setCart: React.Dispatch<React.SetStateAction<Cart | null>>;
}

const cartContext = createContext<CartContext | null>(null);

interface cartContextProviderProps {
  children: ReactNode;
}

export const CartContextProvider = ({ children }: cartContextProviderProps) => {
  const [cart, setCart] = useState<Cart | null>(null);

  const contextValue: CartContext = {
    cart,
    setCart,
  };
  return (
    <cartContext.Provider value={contextValue}>{children}</cartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(cartContext);
  if (!context) {
    throw new Error(
      "L'élément qui consomme CartContext doit se trouver dans le CartContext"
    );
  }

  return context;
};
