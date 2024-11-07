import { Reducer } from "react";
import { CartContextType } from "../contexts/CartContext";
import { CartAction } from "../types/CartAction";
import { CartDataInterface } from "../interfaces/CartData.interface";

const cartReducer: Reducer<CartContextType, CartAction> = (state, action) => {
  switch (action.type) {
    case "REMOVE_ITEM":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };

    case "TOGGLE_QUANTITY": {
      const newCart = state.cart
        .map((item) => {
          if (item.id === action.payload.id) {
            switch (action.payload.type) {
              case "increment":
                return {
                  ...item,
                  quantity:
                    item.quantity < 5 ? item.quantity + 1 : item.quantity,
                };

              case "decrement":
                return {
                  ...item,
                  quantity:
                    item.quantity > 0 ? item.quantity - 1 : item.quantity,
                };

              default:
                return;
            }
          }
          return item;
        })
        .filter((item) => item?.quantity !== 0) as CartDataInterface[];

      return {
        ...state,
        cart: newCart,
      };
    }

    case "CALCULATE_TOTAL": {
      const { total, amount } = state.cart.reduce(
        (cartTotal, item) => {
          const { price, quantity } = item;
          const itemTotal = price * quantity;
          cartTotal.total += itemTotal;
          cartTotal.amount += quantity;
          return cartTotal;
        },
        { total: 0, amount: 0 }
      );
      return {
        ...state,
        total,
        amount,
      };
    }

    default:
      return state;
  }
};

export default cartReducer;
