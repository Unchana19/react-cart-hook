export type CartAction =
  | { type: "REMOVE_ITEM"; payload: number }
  | {
      type: "TOGGLE_QUANTITY";
      payload: { id: number; type: "increment" | "decrement" };
    }
  | { type: "CALCULATE_TOTAL" };
