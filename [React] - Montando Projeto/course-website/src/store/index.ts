import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/productReducer";
import categoryReducer from "./reducers/categoryReducer";
import globalReducer from "./reducers/globalReducer";
import orderReducer from "./reducers/orderReducer";
import userReducer from "./reducers/userReducer";
export const store = configureStore({
  reducer: {
    productReducer,
    categoryReducer,
    globalReducer,
    orderReducer,
    userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>

export default store;
