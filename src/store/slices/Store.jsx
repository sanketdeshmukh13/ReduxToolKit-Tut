import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./UserSclice";

const store = configureStore({
  reducer: {
    users: userSlice,
  },
});

export default store;
