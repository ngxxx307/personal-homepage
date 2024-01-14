import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Slice/authSlice";

const store = configureStore({
  reducer: { auth: authSlice.reducer },
});

export default store;