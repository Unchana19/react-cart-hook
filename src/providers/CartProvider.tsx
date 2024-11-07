import { ReactNode, useEffect, useReducer } from "react";
import { CartContext, initState } from "../contexts/CartContext";
import cartReducer from "../reducers/CartReducer";

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initState);

  useEffect(() => {
    dispatch({ type: "CALCULATE_TOTAL" });
  }, [state.cart]);

  const removeItem = (id: number) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const toggleQuantity = (id: number, type: "increment" | "decrement") => {
    dispatch({ type: "TOGGLE_QUANTITY", payload: { id, type } });
  };

  return (
    <CartContext.Provider value={{ ...state, removeItem, toggleQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
