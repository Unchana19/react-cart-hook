import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export const useCart = () => {
  const cart = useContext(CartContext);

  if (!cart) {
    throw new Error("cart has to be used");
  }
  return useContext(CartContext);
};
