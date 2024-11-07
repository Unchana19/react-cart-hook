import { createContext } from "react";
import { CartDataInterface } from "../interfaces/CartData.interface";
import CartData from "../data/CartData";

export type CartContextType = {
  cart: CartDataInterface[];
  total: number;
  amount: number;
  removeItem: (id: number) => void;
  toggleQuantity: (id: number, type: "increment" | "decrement") => void;
};

export const initState = {
  cart: CartData,
  total: 0,
  amount: 0,
  removeItem: () => {},
  toggleQuantity: () => {},
};

export const CartContext = createContext<CartContextType>(initState);
