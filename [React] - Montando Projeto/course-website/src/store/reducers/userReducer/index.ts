import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {UserType} from "../../../shared/types/UserType";

// Define a type for the slice state
interface UserState {
  users: UserType[];
}

// Define the initial state using that type
const initialState: UserState = {
  users: [],
};

export const counterSlice = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    setUsersAction: (state, action: PayloadAction<UserType[]>) => {
      state.users = action.payload;
    },
  },
});

export const { setUsersAction } = counterSlice.actions;

export default counterSlice.reducer;
