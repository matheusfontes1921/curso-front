import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {ProductType} from "../../../shared/types/ProductType";
import {UserType} from "../../../modules/login/types/UserType";
import {NotificationType} from "../../../shared/types/NotificationType";

// Define a type for the slice state
interface GlobalState {
  notification?: NotificationType;
  user?: UserType;
}

// Define the initial state using that type
const initialState: GlobalState = {
  notification: undefined,
  user: undefined,
};

export const counterSlice = createSlice({
  name: "globalReducer",
  initialState,
  reducers: {
    setNotificationAction: (state, action: PayloadAction<NotificationType>) => {
      state.notification = action.payload;
    },
    setUsersAction: (state, action: PayloadAction<UserType>) => {
      state.user = action.payload;
    },
  },
});

export const { setNotificationAction, setUsersAction } = counterSlice.actions;

export default counterSlice.reducer;
