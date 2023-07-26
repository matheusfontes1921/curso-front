import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {ProductType} from "../../../shared/types/ProductType";

// Define a type for the slice state
interface ProductState {
  products: ProductType[];
}

// Define the initial state using that type
const initialState: ProductState = {
  products: [],
};

export const counterSlice = createSlice({
  name: "productReducer",
  initialState,
  reducers: {
    setProductsAction: (state, action: PayloadAction<ProductType[]>) => {
      state.products = action.payload;
    },
  },
});

export const { setProductsAction } = counterSlice.actions;

export default counterSlice.reducer;
