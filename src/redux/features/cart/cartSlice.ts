import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
// interface CartState {
//   products: [], selcetdItems = [],

// }

// Define the initial state using that type
const initialState = {
  products: [],
  selectedItems: 0,
  totalPrice: 0,
  tax: 0,
  taxRate: 0.1,
  grandTotal: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const isExists = state.products.find(
        (product) => product._id === action.payload._id
      );
      if (!isExists) {
        state.products.push({ ...action.payload, quantity: 1 });
      }
      state.selectedItems = selectSelectedItems(state);
      state.tax = selectTax(state);
      state.totalPrice = selectedTotalPrice(state);
      state.grandTotal = selectGrandTotal(state);
    },
    updateQuantity: (state, action) => {
      const products = state.products.map((product: any) => {
        if (product._id === action.payload._id) {
          if (action.payload.type === "increment") {
            product.quantity += 1;
          } else if (action.payload.type === "decrement") {
            product.quantity -= 1;
          }
        }
        return product;
      });
      state.products = products.filter((product: any) => product.quantity > 0);
      state.selectedItems = selectSelectedItems(state);
      state.tax = selectTax(state);
      state.totalPrice = selectedTotalPrice(state);
      state.grandTotal = selectGrandTotal(state);
    },
    removeFromCart: (state, action) => {
      state.products = state.products.filter(
        (product: any) => product._id !== action.payload._id
      );
      state.selectedItems = selectSelectedItems(state);
      state.tax = selectTax(state);
      state.totalPrice = selectedTotalPrice(state);
      state.grandTotal = selectGrandTotal(state);
    },
  },
});

export const selectSelectedItems = (state: any) =>
  state.products.reduce((total: number, product: any) => {
    return Number(total + product.quantity);
  }, 0);
export const selectedTotalPrice = (state: any) =>
  state.products.reduce((total: number, product: any) => {
    return Number(total + product.quantity * product.price);
  }, 0);
export const selectTax = (state: any) =>
  selectedTotalPrice(state) * state.taxRate;
export const selectGrandTotal = (state: any) => {
  return selectedTotalPrice(state) + selectTax(state);
};
export const { addToCart, updateQuantity, removeFromCart } = cartSlice.actions;
// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default cartSlice.reducer;
